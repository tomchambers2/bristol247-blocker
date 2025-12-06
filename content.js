// Function to hide comments
function hideComments() {
    // Specific selectors for bristol247.co.uk
    const commentSelectors = [
        // Main comment sections
        '#comments',
        '.comments',
        '.comment-section',
        '.comments-section',
        '#comment-section',
        '.disqus_thread',
        '#disqus_thread',
        '.fb-comments',
        '#fb-comments',
        '#respond',
        '.comment-respond',
        '.comment-form',
        '.comment-form-container',
        '.article-comments',
        '.post-comments',
        '.entry-comments',
        '.comment-area',
        '.comment-box',
        '.comment-wrapper',
        
        // Specific to bristol247.co.uk
        '.post-comments-container',
        '.comment-list',
        '.comment',
        '.comments-title',
        '.comment-reply-title',
        '.comment-form-comment',
        '.form-submit',
        '.comment-notes',
        '.logged-in-as',
        '.comment-awaiting-moderation',
        
        // Hide any iframes that might contain comments
        'iframe[src*="disqus"]',
        'iframe[src*="facebook.com/plugins/comment"]',
        'iframe[src*="facebook.com/plugins/comments"]'
    ];

    // Hide elements matching the selectors
    commentSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Remove the element completely from the DOM
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        });
    });

    // Also try to find any iframes that might contain comments
    const iframes = document.getElementsByTagName('iframe');
    Array.from(iframes).forEach(iframe => {
        if (iframe.src.includes('disqus') || 
            iframe.src.includes('facebook.com/plugins/comment') ||
            iframe.src.includes('intensedebate') ||
            iframe.src.includes('livefyre')) {
            iframe.style.display = 'none';
        }
    });
}

// Run immediately when the script loads
hideComments();

// Also run after a short delay to catch dynamically loaded comments
setTimeout(hideComments, 1000);

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(hideComments);
observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});
