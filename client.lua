RegisterNUICallback('showNotification', function(data)
    SendNUIMessage({
        action = "showNotification",
        icon = data.icon or "fa-info-circle",
        title = data.title,
        message = data.message,
        duration = data.duration
    })
end)

function ShowNotification(icon, title, message, duration)
    SendNUIMessage({
        action = "showNotification",
        icon = icon or "fa-info-circle",
        title = title,
        message = message,
        duration = duration or 3000
    })
end

RegisterCommand('notify', function(source, args, rawCommand)
    exports['silanotify']:ShowNotification("fa fa-envelope", "Exodus Roleplay", "Ovo je test notifikacija.", 2500)
end, false)
