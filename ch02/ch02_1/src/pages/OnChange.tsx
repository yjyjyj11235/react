import type {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onchangeval', e.target.value)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onchangefiles', e.target.files)
  }
  return (
    <div>
      <p>onchange</p>
      <input type="text" name="" onChange={onChangeValue} id="" />
      <input type="file" name="" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  )
}
