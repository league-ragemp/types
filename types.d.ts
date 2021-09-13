declare namespace LEAGUE {
  namespace TYPES {
    export type RGB = [ number, number, number ];
    export type RGBA = [ number, number, number, number ];
    export type Array2d = [ number, number ];
    export type Array3d = [ number, number, number ];
    export type Array4d = [ number, number, number, number ];
    export type KeyValueCollection<k extends string, v> = { [key in  k]: v };
    export type Ped = {
      vector: Array3d
      heading: number
    }
    export type Map = {
      id: number
      code: string
      area: Array2d[]
      spawn: KeyValueCollection<TEAMS, Array3d[]>
    }
    export type Cam = {
      vector: Array3d
      rotation: Array3d
      fov: number
      dimension: number
      pointAt: Array3d
    }
  
    namespace HUD {
      export type Gradient = {
        full: RGB
        empty: RGB
      }
      export type TextDraw = {
        font: number
        centre: boolean
        scale: Array2d
        outline: boolean
        color?: RGBA
      }
      export type HealthBar = {
        width: number
        height: number
        border: number
        gradient: Gradient
      }
      export type Window = {
        text: TextDraw
      }
      export type Damage = {
        text: number
      }
      export type Nametag = {
        nickname: TextDraw
        healthBar: HealthBar
        maxDistance: number
      }
    }
  
    namespace CONFIG {
      export type Teams = {
        selector: { cam: Cam, ped: Ped }
        params: KeyValueCollection<TEAMS, { name: string, skins: string[], color: string }>
      }
      export type Hud = {
        window: HUD.Window
        nametag: HUD.Nametag
        damage: HUD.Damage
      }
      export type Damage = {
        group: KeyValueCollection<string, number>
        specific: KeyValueCollection<string, number>
      }
      export type Effects = {
        deathSeconds: number
        roundStartSeconds: number
        roundEndSeconds: number
      }
      export type Weapon = {
        allow: KeyValueCollection<string, string[]>
        kit: string[][]
        damage: Damage
      }
      export type Round = {
        timeInterval: number
      }
      export type Vote = {
        maxNomite: number
        time: number
      }
      export type Server = {
        name: string
        lobby: Array3d
        teams: Teams
        weapon: Weapon
        language: string
        round: Round
        vote: Vote
        hud: Hud
        gamemode: string
        version: string
        effects: Effects
      }
    }

    namespace PLAYER {
      export type Id = {
        id: number
      }
      export type Info = {
        name: string
        rgscId: string
      }
      export type AdditionalInfo = {
        registered: number
        previousNames: string[]
        timePlayed: number
        group: GROUP
        password: string
        rating: number
        exp: number
        lvl: number
        stats: STATS.Player
      }
      export type Profile = Info & AdditionalInfo
    }

    namespace STATS {
      export type Player = {
        kill: number
        death: number
        assist: number
        damageDone: KeyValueCollection<string, number>
        damageReceived: KeyValueCollection<string, number>
        bullets: number
        hit: number
        accuracy: number
      }

      export type Game = {
        score: KeyValueCollection<TEAMS, number>
      }
      export type Round = {
        winner?: TEAMS
        stats: KeyValueCollection<TEAMS, (PLAYER.Id & Player)[]>
      }
    }

    export type NotifyVariant = 'default' | 'error' | 'success' | 'warning' | 'info'
  }
}