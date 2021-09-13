declare namespace League {
  type RGB = [ number, number, number ];
  type RGBA = [ number, number, number, number ];
  type Array2d = [ number, number ];
  type Array3d = [ number, number, number ];
  type Array4d = [ number, number, number, number ];
  type KeyValueCollection<k extends string, v> = { [key in  k]: v };
  type Ped = {
    vector: Array3d
    heading: number
  }
  type Map = {
    id: number
    code: string
    area: Array2d[]
    spawn: KeyValueCollection<Teams, Array3d[]>
  }
  type Cam = {
    vector: Array3d
    rotation: Array3d
    fov: number
    dimension: number
    pointAt: Array3d
  }

  namespace Hud {
    type Gradient = {
      full: RGB
      empty: RGB
    }
    type TextDraw = {
      font: number
      centre: boolean
      scale: Array2d
      outline: boolean
      color?: RGBA
    }
    type HealthBar = {
      width: number
      height: number
      border: number
      gradient: Gradient
    }
    type Window = {
      text: TextDraw
    }
    type Damage = {
      text: number
    }
    type Nametag = {
      nickname: TextDraw
      healthBar: HealthBar
      maxDistance: number
    }
  }

  namespace Config {
    type Teams = {
      selector: { cam: Cam, ped: Ped }
      params: KeyValueCollection<League.Teams, { name: string, skins: string[], color: string }>
    }
    type Hud = {
      window: Hud.Window
      nametag: Hud.Nametag
      damage: Hud.Damage
    }
    type Damage = {
      group: KeyValueCollection<string, number>
      specific: KeyValueCollection<string, number>
    }
    type Effects = {
      deathSeconds: number
      roundStartSeconds: number
      roundEndSeconds: number
    }
    type Weapon = {
      allow: KeyValueCollection<string, string[]>
      kit: string[][]
      damage: Damage
    }
    type Round = {
      timeInterval: number
    }
    type Vote = {
      maxNomite: number
      time: number
    }
    type Server = {
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

  namespace Player {
    type Id = {
      id: number
    }
    type Info = {
      name: string
      rgscId: string
    }
    type AdditionalInfo = {
      registered: number
      previousNames: string[]
      timePlayed: number
      group: Group
      password: string
      rating: number
      exp: number
      lvl: number
      stats: STATS.Player
    }
    type Profile = Info & AdditionalInfo
  }

  namespace STATS {
    type Player = {
      kill: number
      death: number
      assist: number
      damageDone: KeyValueCollection<string, number>
      damageReceived: KeyValueCollection<string, number>
      bullets: number
      hit: number
      accuracy: number
    }

    type Game = {
      score: KeyValueCollection<Teams, number>
    }
    type Round = {
      winner?: Teams
      stats: KeyValueCollection<Teams, (Player.Id & Player)[]>
    }
  }

  type NotifyVariant = 'default' | 'error' | 'success' | 'warning' | 'info'
}