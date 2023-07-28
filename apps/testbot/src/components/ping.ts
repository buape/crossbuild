import { Component, Crossbuild, ReceivedInteraction } from "crossbuild"

export default class Cmd extends Component {
    constructor(client: Crossbuild) {
        super("ping", "command", client, {
            description: "Ping!"
        })
    }

    public override async run(interaction: ReceivedInteraction) {
        await interaction.reply({ content: `Pong` })
    }
}
