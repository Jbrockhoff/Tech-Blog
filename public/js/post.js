//Allows logged in user to make comments on any post
const newFormHandler = async (event) => {
    event.preventDefault();
    
    const body = document.querySelector('#post-comment').value.trim();
    const post_id = event.target.dataset.post

    if (body) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ body, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to post comment');
      }
    }
  };
  
  document
  .querySelector('#new-comment-form')
  .addEventListener('submit', newFormHandler)
