import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import CardMedia from "../assets/card-media.png"
import LayerCard from "../components/LayerCard/LayerCard"

export default {
  title: "Example/LayerCard",
  component: LayerCard
} as ComponentMeta<typeof LayerCard>

const Template: ComponentStory<typeof LayerCard> = (args) => <LayerCard {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Flood zone 3",
  backgroundImage: CardMedia
}
