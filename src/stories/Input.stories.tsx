import React, {ChangeEvent, useState} from 'react';
import {Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

//
// type InputStories = {
//   value?: string
// }
export default {
  title: 'input',
  // component: Header,
};
// const Template: Story<InputStories> = (args) => <input/>;
//
// export const UncontrolledInput = Template.bind({});
//
//
// export const ControlledInput = Template.bind({});
// ControlledInput.args = {
//   value: "Test"
// }

export const ControlledInput = () => {
  const [parentvalue, setParentValue] = useState("")
  const onChange = (e:ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }

  return <input value={parentvalue} onChange={onChange}/>
}

export const  ControlledCheckBox= () => {
  const [parentvalue, setParentValue] = useState(true)
  const onChange = (e:ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.checked) }

  return <input type="checkbox" checked={parentvalue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentvalue, setParentValue] = useState<string | undefined>(undefined)
  const onChange = (e:ChangeEvent<HTMLSelectElement>) => {setParentValue(e.currentTarget.value)}


  return <select value={parentvalue} onChange={onChange}>
    <option>none</option>
    <option value={1}>Minsk</option>
    <option value={2}>Grodno</option>
    <option value={3}>London</option>
  </select>

}