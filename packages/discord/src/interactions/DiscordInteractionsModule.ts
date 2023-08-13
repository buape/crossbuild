import { LogLevel, Module, ModuleConfig, Paginator } from "@crossbuild/core"
import {
    ApplicationCommandData,
    ApplicationCommandOptionData,
    ApplicationCommandOptionType,
    CacheType,
    Client,
    ClientOptions,
    Interaction
} from "discord.js"
import { DiscordChannel, DiscordReceivedInteraction, DiscordServer, DiscordUser } from ".."

export interface DiscordInteractionsModuleConfig extends ModuleConfig {
	/** The options to pass to the Discord client */
	options: ClientOptions
	/** The token of your bot */
	token: string
}

export class DiscordInteractionsModule extends Module {
    config: DiscordInteractionsModuleConfig
    client: Client

    constructor(config: DiscordInteractionsModuleConfig) {
        super(config)
        this.client = new Client(config.options)
        this.config = config
    }

    public async load() {
        await this.client.login(this.config.token)

        try {
            this.client.application?.commands.set(
				this.crossbuild!.components.filter((x) => x.type === "command").map((command) => {
				    const data: ApplicationCommandData = {
				        name: command.key,
				        description: command.description || "No description provided",
				        options: command.options?.map((option) => {
				            return {
				                type:
									option.type === "string"
									    ? ApplicationCommandOptionType.String
									    : option.type === "integer"
									        ? ApplicationCommandOptionType.Integer
									        : option.type === "boolean"
									            ? ApplicationCommandOptionType.Boolean
									            : ApplicationCommandOptionType.String,
				                name: option.name,
				                description: option.description || "No description provided",
				                required: option.required || false,
				                choices: option.choices,
				                min_value: option.minValue,
				                max_value: option.maxValue,
				                min_length: option.minLength,
				                max_length: option.maxLength
				            } as ApplicationCommandOptionData
				        })
				    }
				    return data
				})
            )
        } catch (error) {
			this.crossbuild!.log(`Failed to sync Discord commands: ${error}`, LogLevel.WARN)
        }
        return true
    }

    public async startListening() {
        this.client.on("interactionCreate", (interaction) => this.handleInteraction(interaction))
    }

    public async stopListening() {
        this.client.off("interactionCreate", (interaction) => this.handleInteraction(interaction))
    }

    private handleInteraction(interaction: Interaction) {
        if (interaction.isButton() && interaction.customId.startsWith("cb")) {
            const paginator = this.paginators.get(interaction.customId.split(":")[1].split(",")[0])
            if (paginator) return paginator.handlePage(interaction)
        }
        this.interaction(interaction)
    }

    public watchPaginator(paginator: Paginator) {
        this.paginators.set(paginator.id, paginator)
    }

    public unwatchPaginator(paginator: Paginator) {
        this.paginators.delete(paginator.id)
    }

    private async interaction(discordInteraction: Interaction<CacheType>) {
        console.log(discordInteraction)
        if (!this.crossbuild) throw new Error("CrossBuild client not loaded")
        const server = discordInteraction.guild ? new DiscordServer(discordInteraction.guild) : null
        const user = new DiscordUser(discordInteraction.user)
        const channel = discordInteraction.channel ? new DiscordChannel(discordInteraction.channel) : null

        const interaction = new DiscordReceivedInteraction(this.crossbuild, {
            id: discordInteraction.id,
            key: discordInteraction.isCommand() || discordInteraction.isAutocomplete() ? discordInteraction.commandName : discordInteraction.customId,
            type: discordInteraction.isChatInputCommand()
                ? "command"
                : discordInteraction.isButton()
                    ? "button"
                    : discordInteraction.isAnySelectMenu()
                        ? "selectMenu"
                        : "command",
            original: discordInteraction,
            server,
            user,
            channel
        })
        this.crossbuild.componentHandler.handleComponent(interaction)
    }
}
