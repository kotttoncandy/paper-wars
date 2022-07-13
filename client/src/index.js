import kaboom from 'kaboom'

kaboom({
    background: [36, 81, 149, ],
    crisp: true
})
import {
    io
} from "socket.io-client";
const socket = io("localhost:3000")

var drawingsx = []
var drawingsy = []

var player_id = []

var SPEED = 320

function get_angle(pos) {
    return Math.atan2(pos.y, pos.x)

}

loadSprite("gun", "src/textures/gun.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
        g1: {
            from: 0,
            to: 0
        },
        g2: {
            from: 1,
            to: 1
        },
        g3: {
            from: 2,
            to: 2
        },
    },
})
loadSprite("title", "src/textures/pixilart-frames(40)/pixil-frame-0.png")
loadSprite("player", "src/textures/circles.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        c1: {
            from: 0,
            to: 0
        },
        c2: {
            from: 1,
            to: 1
        },
        c3: {
            from: 2,
            to: 2
        },
        c4: {
            from: 3,
            to: 3
        },
        c5: {
            from: 4,
            to: 4
        },
    }
})

var an = [
    "c1",
    "c2",
    "c3",
    "c4",
    "c5"
]

var gu = [
    "g1",
    "g2",
    "g3"
]

loadSprite("chair", "src/textures/furniture/pixil-frame-1.png")
loadSprite("tv", "src/textures/furniture/pixil-frame-2.png")
loadSprite("rug", "src/textures/furniture/pixil-frame-3.png")
loadSprite("table", "src/textures/furniture/pixil-frame-4.png")
loadSprite("bed", "src/textures/furniture/pixil-frame-5.png")
loadSprite("fan", "src/textures/furniture/pixil-frame-6.png")
loadSprite("fish", "src/textures/furniture/pixil-frame-7.png")
loadSprite("spawn", "src/textures/furniture/pixil-frame-8.png")
loadSprite("bullet", "src/textures/bullet.png")
loadSound("main_music", "src/sounds/game_music.mp3")
loadSprite("background", "src/textures/1.png")
loadSprite("title", "src/textures/2.png")

scene("game", () => {



    addLevel([
        "====================================",
        "=                                  =",
        "=           >                      =",
        "=   !             6        !       =",
        "=                                  =",
        "=    {                             =",
        "= ?                       %        =",
        "=            @                     =",
        "=                  *               =",
        "=                                  =",
        "=       !               !          =",
        "=                                  =",
        "====================================",


    ], {
        // define the size of each block
        width: 100,
        height: 100,
        // define what each symbol means, by a function returning a component list (what will be passed to add())
        "=": () => [
            rect(100, 100),
            area(),
            pos(),
            solid(),
            "wall",
        ],
        "@": () => [
            sprite("rug"),
            "spawn",
            origin("center"),
            area()
        ],
        "*": () => [
            sprite("fan"),
            scale(0.7)
        ],
        ">": () => [
            sprite("tv")
        ],
        "{": () => [
            sprite("table")
        ],
        "%": () => [
            sprite("fish")
        ],
        "?": () => [
            sprite("chair")
        ],
        "6": () => [
            sprite("bed")
        ],
        "!": () => [
            sprite("spawn"),
            "spawn",
            origin("center"),
            area()



        ],
    })

    // init temps 
    setTimeout(() => {
        socket.emit("og_init")
        socket.emit("emit_init")
    }, 500)
    setTimeout(() => {
        socket.emit("server_init")
    }, 100)

    socket.on("e_check", (r) => {
        player_id.push(r)
    })

    var spawns = get("spawn")
    var spawn = spawns[Math.floor(Math.random() * spawns.length)]
    gravity(1000)
    var v = add([
        sprite("spawn"),
        area(),
        scale(3, 3),
        pos(spawn.pos.x, spawn.pos.y - 200),
        origin("center"),
        z(100000)
    ])

    v.onUpdate(() => {
        v.pos.y = v.pos.y + 300 * (1 / debug.fps()) * 1
    })

    // og init

    socket.on("init_og", (id) => {
        const og = add([
            area({
                width: 50,
                height: 50
            }),
            solid(),
            pos(center()),
            origin("center"),
            String(id) + "og",
            "og"
        ])
        og.pos.x = spawn.pos.x
        og.pos.y = spawn.pos.y
    })

    // drawing function
    function draw() {
        socket.emit("tag_it")
        if (drawing_time) {

            socket.on("tag_id", (tag_id) => {
                var tag = Math.floor(Math.random() * 10000)
                every(tag_id + "og", (og) => {
                    var drawing = add([
                        rect(25, 25),
                        origin("center"),
                        pos(toWorld(mousePos())),
                        area({
                            width: 0.1,
                            height: 0.1
                        }),
                        scale(),
                        follow(og, vec2(toWorld(mousePos()).x - og.pos.x, toWorld(mousePos()).y - og.pos.y)),
                        color([0, 0, 0]),
                        String(tag_id),
                        String(tag)
                    ])
                    drawingsx.push(drawing.pos.x)
                    drawingsy.push(drawing.pos.y)

                    player_id.push(tag_id)
                })


            })


        }

    }

    // GUN INIT

    // BULLET

    var fine = true
    onMousePress(() => {
        if (!drawing_time && fine) {
            socket.emit("bullet_shot")
            every(String(player_id[0]) + "gun", (gu) => {
                add([
                    sprite("bullet"),
                    outline(2),
                    area(),
                    scale(0.2),
                    pos(gu.pos),
                    move(gu.angle, 1200),
                    lifespan(1),
                    origin("center"),

                ])
            })
            fine = false
            setTimeout(() => {
                if(fine == false) {
                    fine = true
                }
            }, 1000)
        }

    })

    var ani = an[Math.floor(Math.random() * an.length)]
    var gus = gu[Math.floor(Math.random() * gu.length)]

    // shoots bullet
    socket.on("shoot_bullet", (e) => {
        every(String(e) + "gun", (gu) => {
            add([
                sprite("bullet"),
                outline(2),
                area(),
                scale(0.2),
                pos(gu.pos),
                move(gu.angle, 1200),
                lifespan(1),
                origin("center"),
                String(e) + "bullet",
                "bullet"
            ])
        })

    })



    socket.on("init_player", (d) => {
        every(d + "og", (og) => {
            player_id.push(d)

            var gun = add([
                sprite("gun"),
                pos(og.x + 200, og.y),
                origin("center"),
                scale(0.7),
                area(),
                z(0),
                follow(og, vec2((og.pos.x + 300) - og.pos.x, og.pos.y - og.pos.y)),

                String(d),
                String(d) + "gun",
                "gun"

            ])


            // PLAYER TEMP INIT

            var player_temp = add([
                sprite("player"),
                pos(og.pos),
                origin("center"),
                area(),
                follow(og, vec2(og.pos.x - og.pos.x, og.pos.y - og.pos.y)),
                String(d),
                health(5),
                z(100001),
                "temp",
                "player",
                "temp" + String(d),
            ])
            player_id.push(d)
            player_temp.play(ani)
            debug.log(gus)

            og.pos.x = spawn.pos.x
            og.pos.y = spawn.pos.y
            gun.play(gus)

        })


    })


    onKeyDown("a", () => {
        every(player_id[0] + "og", (og) => {

            // .move() is provided by pos() component, move by pixels per second
            og.move(-SPEED, 0)
        })

    })

    onKeyDown("d", () => {
        every(player_id[0] + "og", (og) => {

            og.move(SPEED, 0)
        })

    })

    onKeyDown("w", () => {
        every(player_id[0] + "og", (og) => {

            og.move(0, -SPEED)
        })
    })

    onKeyDown("s", () => {
        every(player_id[0] + "og", (og) => {

            og.move(0, SPEED)
        })

    })

    // bullet regi

    onCollide("bullet", "player", (e, a) => {
        socket.emit("bullet_hit")
    })

    socket.on("hit_bullet", (e) => {
        every("temp" + e, (r) => {
            r.hurt(1)

        })
    })

    on("death", "player", () => {
        socket.emit("killed_someone")
    })

    socket.on("someone_killed", (a) => {
        every(String(a) + "og",(r) => {
            r.pos.x = spawn.pos.x
            r.pos.y = spawn.pos.y
            every("player", (g) => {
                g.heal(5)
            })
        })

    })

    // end of bullet regi

    var paper = add([
        rect(0, 0),
    ])

    var pencil = add([
        rect(25, 25),
        color([0, 0, 0]),
        origin("center"),
        area()
    ])

    const speed = 500

    onMouseDown("left", () => {
        if (drawing_time) {
            draw()
        }
    })

    var drawing_time = true
    var gun_up = false

    // UPDATE FUNCTION
    setTimeout(() => {
        gun_up = true
        return gun_up
    }, 500)
    // use this
    onUpdate(() => {
        if (drawing_time) {
            pencil.pos = toWorld(mousePos())
        }

        if (gun_up) {
            every(String(player_id[0]) + "gun", (gun) => {
                every(String(player_id[0] + "og"), (e) => {
                    gun.angle = toWorld(mousePos()).angle(gun.pos)
                    socket.emit("update_gun", gun.angle)
                })

            })

        }
        if (!drawing_time) {
            every(player_id[0] + "og", (e) => {
                socket.emit("o_pos", e.pos)
            })
        }
        if (!drawing_time) {
            every(player_id[0] + "og", (e) => {
                camPos(e.pos)
            })
        }
        if (drawing_time) {
            camPos(spawn.pos.x, spawn.pos.y)
        }
    })

    socket.on("pos_o", (p) => {
        every(p.id + "og", (e) => {
            e.pos.x = p.posx
            e.pos.y = p.posy

        })
    })

    socket.on("change_gun", (a) => {
        every(String(a.id) + "gun", (gun_tar) => {
            gun_tar.angle = a.angle
        })

    })

    var draw_pos = []
    // ready function
    setTimeout(() => {
        drawing_time = false
        destroy(paper)
        destroy(pencil)
        new_drawingsx = [...new Set(drawingsx)];
        new_drawingsy = [...new Set(drawingsy)];

        socket.emit("ready", {
            dx: new_drawingsx,
            dy: new_drawingsy,
            animation: ani,
            spawnx: spawn.pos.x,
            spawny: spawn.pos.y,
            gun_t: gus
        })
        return drawing_time
    }, 5000)
    // use this for player update


    socket.on("update_pos", (a) => {
        if (a.dir === "down") {
            every(String(a.id), (d) => {
                d.move(0, speed)

            })
        }

        if (a.dir === "up") {
            every(String(a.id), (d) => {
                d.move(0, -speed)

            })
        }
        if (a.dir === "right") {
            every(String(a.id), (d) => {
                d.move(speed, 0)

            })
        }

        if (a.dir === "left") {
            every(String(a.id), (d) => {
                d.move(-speed, 0)

            })
        }

    })

    socket.on("create", (poss) => {
        var eog = add([
            area({
                width: 50,
                height: 50
            }),
            solid(),
            pos(poss.spawnx, poss.spawny),
            origin("center"),
            String(poss.id) + "og",
            "og"
        ])
        for (let d in poss.dx) {
            var drawing = add([
                rect(25, 25),
                origin("center"),
                pos(poss.dx[d], poss.dy[d]),
                area(),
                scale(),
                color([0, 0, 0]),
                follow(eog, vec2(poss.dx[d] - eog.pos.x, poss.dy[d] - eog.pos.y)),
                String(poss.id),
                String(poss.id) + "enemy",
            ])

        }

        var gun = add([
            sprite("gun"),
            pos(eog.x + 200, eog.y),
            origin("center"),
            scale(0.7),
            area(),
            z(1000),
            String(poss.id),
            String(poss.id) + "gun",
            follow(eog, vec2((eog.pos.x + 200) - eog.pos.x, eog.pos.y - eog.pos.y)),

            "gun"

        ])

        var player_temp = add([
            sprite("player"),
            pos(eog.pos),
            origin("center"),
            area(),
            follow(eog, vec2(eog.pos.x - eog.pos.x, eog.pos.y - eog.pos.y)),
            String(poss.id),
            "temp",
            health(5),
            "enemy",
            "temp" + poss.id
        ])
        player_temp.play(poss.animation)

        gun.play(poss.gun_t)
    })



})

scene("title", () => {
    add([
        sprite("background"),
        pos(center()),
        origin("center"),
        scale(1.1, 1.1)
    ])
    add([
        sprite("title"),
        pos(1378, 262),
        rotate(20),
        origin("center"),
        "title",
        area(),
        scale()

    ])
    let curDraggin = false

    // drop
    onMouseRelease(() => {
        curDraggin = false
        tar.pop()

    })
    onMouseDown(() => {
        curDraggin = true

    })
    add([
        rect(10000, 10000),
        color(242, 111, 155),
        z(-1)
    ])

    var tar = []

    onClick("title", (e) => {
        if (curDraggin) {
            tar.pop()
            tar.push(e)
        }
    })
play("main_music", {
    loop: true

})
    onUpdate(() => {
        if (curDraggin && tar.length == 1)
            tar[0].pos = mousePos()
    })


    add([
        area({
            width: 100000,
            height: 50
        }),
        solid(),
        pos(0, 800),
    ])

    var m = add([
        text("Play! 0"),
        area(),
        pos(center().x, center().y + 200),
        origin("center"),
        "play",
        "title",
        scale(),

    ])
    add([
        text(":"),
        area(),
        pos(center().x + 100, m.pos.y),
        origin("center"),
        scale(),
        "play",
        "title"

    ])
    onClick("play", () => {
        go("game")
    })

    var size = 0.01
    setInterval(() => {
        size = -size
        return size
    }, 500)

    onUpdate(() => {
        every("title", (r) => {
            r.scale.x = r.scale.x + size
            r.scale.y = r.scale.y + size

        })
    })

})

go("title")