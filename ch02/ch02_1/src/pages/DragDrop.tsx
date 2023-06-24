import type {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) =>
    console.log('dragstart', e.dataTransfer)
  const onDragEnd = (e: DragEvent<HTMLElement>) => console.log('dragend', e.dataTransfer)
  const onDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault()
  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('ondrop', e.dataTransfer)
  }
  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>Drag me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>drop over me</h1>
      </div>
    </div>
  )
}
