declare namespace LEAGUE {
  export const enum CLIENT_EVENTS {
    /** This event is invoked by clientside to change shared data on server */
    SET_SHARED_DATA            = 'client_events.shared_data.set',
    /** This event is invoked by clientside to change player data on server */
    SET_PLAYER_DATA            = 'client_events.player_data.set',
    /** This event is invoked by clientside when the all dummies are registred */
    DUMMIES_READY              = 'client_events.dummies.ready',
    /** This event is invoked by clientside to spawn in lobby */
    SPAWN_IN_LOBBY             = 'client_events.spawn.lobby',
    /** This event is invoked by clientside to update round stat*/
    ROUND_STAT_UPDATE          = 'client_events.roundstat.update',
    /** This event is invoked by clientside to update round stat assist */
    ASSIST_UPDATE              = 'client_events.roundstat.update_assist',
    /** This event is invoked by clientside when client browser is ready */
    BROWSER_READY              = 'client_events.browser.ready',
    /** This event is invoked by clientside to notify a player about outcoming damage by player id */
    DAMAGE_REQUEST_NOTIFY      = 'client_events.damage.request',
    /** This event is invoked by clientside to notify that player is dead */
    PLAYER_DEATH               = 'client_events.player.death',
    /** This event is invoked by clientside when a player wants to add a new map */
    MAP_EDITOR_ADD_MAP         = 'client_events.map_editor.add_map',
  }
}