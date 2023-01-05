import React from 'react'
import { useRef } from 'react'

function Comments() {
  const commentRef=useRef()

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(commentRef.current.value);
  }
  return (
   <div className='comments__container'>
    <form className='comment__form' onSubmit={handleSubmit}>
      <label htmlFor="comment"></label>
      <textarea
       type="text"
       name='comment' 
       id='comment'
       placeholder='Type yours comments..'
       required
       ref={commentRef}
       >
        </textarea>
        <button className='commentBtn'>
          ADD COMMENT
        </button>
        <div className="comments__section">
          <h2>Existing comments</h2>
          </div>
    </form>

   </div>
  )
}

export default Comments