// This script resets daily quests for players when they log in for the first time each "Quest Day".
/**
 * Calculates a unique string for the current "Quest Day".
 * A new quest day starts every day at 20:00 UTC (12:00 PM PST).
 * @returns {string} A date string like "2025-11-03" representing the current quest day.
 */
function getQuestDayString() {
    const now = new Date();
    const resetHourUTC = 20; // 12:00 PM PST is 20:00 UTC

    // If the current time is before the reset hour, we are still in the PREVIOUS quest day.
    // So, we subtract one day from the current date to get the correct quest day string.
    if (now.getUTCHours() < resetHourUTC) {
        now.setUTCDate(now.getUTCDate() - 1);
    }
    
    // Return the date in a simple, consistent format (e.g., "2025-11-03")
    return now.toISOString().slice(0, 10);
}

// This event fires every time a player joins the server.
PlayerEvents.loggedIn(event => {
    const { player, server } = event;

    // Get the string for the current quest day (e.g., "2025-11-03")
    const currentQuestDay = getQuestDayString();
    
    // Get the last quest day this specific player had a reset.
    // This is stored in the player's own persistent data.
    const lastResetDay = player.persistentData.lastQuestResetDay;

    // If the player's last reset day is not the same as the current quest day, they need a reset.
    if (lastResetDay !== currentQuestDay) {
        console.log(`[Quests] Player ${player.username} logged in for the first time on quest day ${currentQuestDay}. Resetting quests.`);

        // Run the reset command specifically for the player who just logged in.
        // This command is guaranteed to work because the player is online.
        server.runCommandSilent(`/ftbquests change_progress ${player.username} reset-all`);

        // Tell the player their quests have been reset.
        player.tell('Your daily quests have been reset!');

        // IMPORTANT: Update the player's data to mark that they have been reset for the current quest day.
        // This prevents their quests from resetting again if they log out and back in on the same day.
        player.persistentData.lastQuestResetDay = currentQuestDay;
    }
});