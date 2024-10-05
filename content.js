// Function to get and display the dislike count
function showDislikeCount() {
  // Wait for the dislike button to be available on the page
  const dislikeButton = document.querySelector('.btn__2aOZ:nth-child(2)');
  
  if (dislikeButton) {
    // Extract the dislike count from the button text
    const dislikeCount = dislikeButton.innerText.trim();

    // Create a container for displaying the dislike count
    const dislikeContainer = document.createElement('div');
    dislikeContainer.id = 'leetcode-dislike-shower';
    dislikeContainer.innerHTML = `Dislikes: ${dislikeCount}`;
    
    // Add styling to the container (will also be enhanced by styles.css)
    dislikeContainer.style.backgroundColor = '#ff6f61';
    dislikeContainer.style.color = '#fff';
    dislikeContainer.style.padding = '10px';
    dislikeContainer.style.borderRadius = '5px';
    dislikeContainer.style.fontSize = '16px';
    dislikeContainer.style.position = 'fixed';
    dislikeContainer.style.top = '10px';
    dislikeContainer.style.right = '10px';
    dislikeContainer.style.zIndex = '9999';

    // Append the container to the body
    document.body.appendChild(dislikeContainer);
  }
}

// Run the function when the page is fully loaded
window.onload = function() {
  showDislikeCount();
};
