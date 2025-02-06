function showNotification(icon, title, message, duration = 3000) {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const iconElement = icon ? `<i class="fas ${icon} notification-icon"></i>` : '';
    const titleBox = `
        <div class="notification-title-container">
            ${iconElement}
            <div class="notification-title">${title}</div>
        </div>
    `;
    const messageBox = `<div class="notification-message">${message}</div>`;
    
    notification.innerHTML = titleBox + messageBox;
    
    container.appendChild(notification);
    document.getElementById('notify-sound').play();
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

window.addEventListener('message', function(event) {
    if (event.data.action === 'showNotification') {
        showNotification(event.data.icon, event.data.title, event.data.message, event.data.duration);
    }
});
