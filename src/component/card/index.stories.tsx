import { Card as CardComp, CardProps } from "./"
import { Story, Meta } from "@storybook/react"

export default {
  title: "Card",
  component: CardComp
} as Meta<typeof CardComp>

const Template: Story<typeof CardComp> = (args) => {
  return (
    <div style={{ width: 229, margin: "100px auto" }}>
      <CardComp {...args} />
    </div>
  )
}

const TemplateList: Story<{ list: Array<CardProps> }> = ({ list }) => {
  return (
    <div style={{ width: 229, margin: "-10px auto" }}>
      {list.map((cardProps, index) => (
        <div key={index.toString()} style={{ padding: "10px 0" }}>
          <CardComp {...cardProps} />
        </div>
      ))}
    </div>
  )
}

export const Card = Template.bind({})
Card.args = {
  label: "Flood zone 3",
  image: "/images/CardMedia.png",
  checked: true,
  variant: "outlined"
}

export const CardList = TemplateList.bind({})
CardList.args = {
  list: [
    {
      label: "Flood zone 1",
      image: "/images/CardMedia.png",
      checked: true,
      variant: "outlined"
    },
    {
      label: "Flood zone 2",
      image: "/images/CardMedia.png",
      checked: false,
      variant: "outlined"
    },
    {
      label: "Flood zone 3",
      image: "/images/CardMedia.png",
      checked: false,
      variant: "outlined"
    }
  ]
}
