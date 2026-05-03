
{示例关卡
	{
	"#comment": "By Iris",
	"objects":[{},{},{}],
	"version": 1
	}
}


{关卡结构
	//Defined in objects
	
	
	/*关键词
		基础
			游戏模式
			关卡事件
			附加条件
			地图设置
			生成事件
			限制事件
			突袭事件
		进阶
			规划事件
			特殊事件
			自定义
		
	*/
	
		//关卡流程
		//RTID(WaveManagerProps@CurrentLevel)"
		//用于NewWaves
		{
			"aliases": ["WaveManagerProps"],
			"objclass": "WaveManagerProperties",
			"objdata": {
				//大波僵尸
				"FlagWaveInterval": 100,
				"WaveCount": 1,
				//魔音僵尸技能
				"LevelJamList":[
                    "jam_rap",
			        "jam_8bit",
                    "jam_metal",
                    "jam_punk",
                    "jam_pop"  
                ],
				//可填入任意关卡事件
				"Waves": [
					["RTID(Wave1@CurrentLevel)","RTID(Wave1GraveSpawn@CurrentLevel)"],
					["RTID(Wave2@CurrentLevel)","RTID(Wave2StormSpawn@CurrentLevel)"],
					["RTID(Wave3@CurrentLevel)"],
					["RTID(Wave4@CurrentLevel)","RTID(Wave4StormSpawn@CurrentLevel)"],
					["RTID(Wave5@CurrentLevel)","RTID(Wave5StormSpawn@CurrentLevel)"],
					["RTID(Wave6@CurrentLevel)"],
					["RTID(Wave7@CurrentLevel)","RTID(Wave7StormSpawn@CurrentLevel)"],
					["RTID(Wave8@CurrentLevel)"],
					["RTID(Wave9@CurrentLevel)","RTID(Wave9StormSpawn@CurrentLevel)"],
					["RTID(Wave10@CurrentLevel)"]
				]
			}
		},
		
		//动态难度
		//RTID(NewWaves@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"NewWaves"
			],
			"objclass": "WaveManagerModuleProperties",
			"objdata": {
				"DynamicZombies": [
				{},
				{},
				{},
				{},
				{
					"PointIncrementPerWave": 32,
					"StartingPoints": 125,
					"StartingWave": 1,
					"ZombiePool": [
						"RTID(mummy_armor1@ZombieTypes)",
						"RTID(mummy_armor2@ZombieTypes)",
						"RTID(mummy_armor4@ZombieTypes)"
					]
				},
				{
					"PointIncrementPerWave": 84,
					"StartingPoints": 500,
					"StartingWave": 4,
					"ZombiePool": [
						"RTID(mummy_armor1@ZombieTypes)",
						"RTID(mummy_armor2@ZombieTypes)",
						"RTID(lostcity_bug_armor1@ZombieTypes)",
						"RTID(lostcity_bug_armor2@ZombieTypes)",
						"RTID(camel_manyhump@ZombieTypes)",
						"RTID(west_bull@ZombieTypes)",
						"RTID(pharaoh@ZombieTypes)",
						"RTID(mummy_armor4@ZombieTypes)"
					]
				},
				{
					"PointIncrementPerWave": 45,
					"StartingPoints": 400,
					"StartingWave": 7,
					"ZombiePool": [
						"RTID(tomb_raiser@ZombieTypes)",
						"RTID(tomb_raiser@ZombieTypes)",
						"RTID(tomb_raiser@ZombieTypes)",
						"RTID(tomb_raiser@ZombieTypes)",
						"RTID(explorer@ZombieTypes)",
						"RTID(mummy_armor4@ZombieTypes)",
						"RTID(mummy_armor4@ZombieTypes)",
						"RTID(mummy_flag_veteran@ZombieTypes)",
						"RTID(mummy_flag_veteran@ZombieTypes)",
						"RTID(future_jetpack_veteran@ZombieTypes)",
						"RTID(future_jetpack_veteran@ZombieTypes)"
					]
				}
				],
				"WaveManagerProps": "RTID(WaveManagerProps@CurrentLevel)"
			}
		},
		
		//关卡定义
		//无法引用
		//用于objects
		{
			"objclass": "LevelDefinition",
			"objdata": {
				//关卡描述
				"Description": "TEST",
				//系列关卡序号
				"LevelNumber": 1,
				//未知
				"Loot": "RTID(DefaultLoot@LevelModules)",
				/*
				几乎必填：
					"RTID(StandardIntro@LevelModules)",
					"RTID(ZombiesDeadWinCon@LevelModules)",
					"RTID(DefaultZombieWinCondition@LevelModules)",
				可填入：
					"RTID(SeedBank@CurrentLevel)",
					"RTID(NewWaves@CurrentLevel)",
					天降阳光
					"RTID(DefaultSunDropper@LevelModules)"
					关卡目标&描述
					"RTID(BeatTheLevel@CurrentLevel)"
					小推车
					"RTID(LostCityMowers@LevelModules)",
					任何关卡事件，在关卡开始时发生
					等等
				*/
				"Modules": [
					"RTID(StandardIntro@LevelModules)",
					"RTID(SeedBank@CurrentLevel)",
					"RTID(ZombiesDeadWinCon@LevelModules)",
					"RTID(DefaultZombieWinCondition@LevelModules)",
					"RTID(NewWaves@CurrentLevel)",
					"RTID(Gravestones@CurrentLevel)"
				],
				//关卡名
				"Name": "TEST ",
				"NameMultiLanguage": {
					"en": "TEST",
					"zh": "TESDF"
				},
				//作者
				"WritenBy": "Iris",
				//沙盒模式
				"SandBoxMode":false,
				//与世界有关
				"NormalPresentTable": "egypt_normal_01",
				"ShinyPresentTable": "egypt_shiny_01",
				//初始阳光
				"StartingSun":2250,
				//地图
				"StageModule": "RTID(FutureStage@LevelModules)"
			}
		},
		
		//游戏模式·自选植物
		//"RTID(SeedBank@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"SeedBank"
			],
			"objclass": "SeedBankProperties",
			"objdata": {
				/*
				"PresetPlantList":戴夫给你选的植物
				"PlantBlackList":禁用植物且禁止产阳光(月光花/路灯花产不了光了)
				"PlantExcludeList":禁用植物
				"PlantIncludeList":可用植物列表
				*/
				"PresetPlantList": [
				{
					"Level": -1,
					"PlantType": "sunflower"
				},{
					"Level": -1,
					"PlantType": "citron"
				},{
					"Level": -1,
					"PlantType": "chilibean"
				},{
					"Level": -1,
					"PlantType": "stallia"
				}
				],
				"PlantExcludeList": [
					"goldbloom",
					"solarsage",
					"escaperoot",
					"goldleaf"
				],
				/*
				preset:锁卡
				chooser:自选卡
				*/
				"SelectionMethod": "chooser",
				//卡组功能(from Iceshroom2)
				"CardDecks": {
					//推荐卡组
					"Recommended": [
						{
						"Name": {
							"en": "Swipe Their Heads Off!",
							"zh": "一扫而空！"
						},
						"Leader": 2,
						"Plants": [
							"sunshroom",
							"moonflower",
							"dusklobber",
							"guacodile",
							"holonut",
							"primalwallnut"
						]
						}
					],
					//挑战卡组
					//没错可以刷钻石哦
					"Challenging": [
						{
						"Name": {
							"en": "Step by Step",
							"zh": "循序渐进"
						},
						"Leader": 1,
						"HugeWaveGem": 2,
						"Plants": [
							"sunshroom",
							"wintermelon",
							"puffshroom",
							"holonut",
							"iceburg",
							"cherry_bomb"
						]
						}
					]
				},
        
			}
		},
		
		//关卡目标&描述
		//"RTID(BeatTheLevel@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases":["BeatTheLevel"],
			"objclass": "StarChallengeBeatTheLevelProps",
			"objdata": {
				"Descriptions": [
					"Made by Birdscraft"
				] 
			}
		},
		
		//游戏模式·坚不可摧
		//"RTID(LastStand@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"LastStand"
			],
			"objclass": "LastStandMinigameProperties",
			"objdata": {
				"StartingPlantfood": 2,
				"StartingSun": 1700
			}
		},
		
		//游戏模式·传送带
		//作者不玩传送带
		
		//附加条件·保护危险的植物
		//"RTID(ProtectThePlant@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"ProtectThePlant"
			],
			"objclass": "ProtectThePlantChallengeProperties",
			"objdata": {
				//要保护的植物数量
				"MustProtectCount": 3,
				"Plants": [
				{
					"GridX": 2,
					"GridY": 0,
					"PlantType": "plantern"
				},
				{
					"GridX": 2,
					"GridY": 2,
					"PlantType": "plantern"
				},
				{
					"GridX": 2,
					"GridY": 4,
					"PlantType": "plantern"
				}
				]
			}
		},
		
		//附加条件·火药桶
		//"RTID(KongfuTNT@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
            "aliases": [
                "KongfuTNT"
            ],
            "objclass": "KongfuTNTProperties",
            "objdata": {
                "Speed": 0.5,
                "TriggerGameLose": true,
                "DamagesToZombies": false,
                "DamagesToPlants": true,
                "SpawnData": [
                    {
                        "Speed": 0.01,
                        "WireLength": 7,
                        "GridX": -1,
                        "GridY": 0
                    },
                    {
                        "Speed": 0.5,
                        "WireLength": 8,
                        "GridX": -1,
                        "GridY": 1
                    },
                    {
                        "Speed": 0.5,
                        "WireLength": 7,
                        "GridX": -1,
                        "GridY": 2
                    },
                    {
                        "Speed": 0.5,
                        "WireLength": 8,
                        "GridX": -1,
                        "GridY": 3
                    },
                    {
                        "Speed": 0.5,
                        "WireLength": 7,
                        "GridX": -1,
                        "GridY": 4
                    }
                ]
            }
        },
		
		//附加条件·设置各种地物
		//"RTID(GridItemPlacement@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
            "aliases": [
                "GridItemPlacement"
            ],
            "objclass": "InitialGridItemProperties",
            "objdata": {
                "InitialGridItemPlacements": [
                    {
                        "GridX": 6,
                        "GridY": 0,
                        "TypeName": "goldtile"
                    },
                    {
						"GridX": 6,
						"GridY": 1,
						"TypeName": "slider_up"
					}
                ]
            }
        },
		
		//附加条件·开局设置地物
		//"RTID(Gravestone@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
            "aliases": [
                "Gravestone"
            ],
            "objclass": "GravestoneProperties",
            "objdata": {
                "ForceSpawnData": [
                    {
                        "GridX": 6,
                        "GridY": 1,
                        "TypeName": "kongfu_rack_torch"
                    },
                    {
                        "GridX": 6,
                        "GridY": 3,
                        "TypeName": "kongfu_rack_torch"
                    }
                ]
            }
        },
		
		//附加条件·设置失落陷阱砖
		//"RTID(LostCityTrapTileGroups@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
            "aliases": [
                "LostCityTrapTileGroups"
            ],
            "objclass": "TrapTileProperties",
            "objdata": {
                "TrapTiles": [
                    {
						//烈火砖
                        "Group": "flame",
                        "Location": {
                            "mX": 4,
                            "mY": 0
                        },
                        "RecoverDelay": 7.5
                    },
                    {
                        "Group": "boulder_forward",
                        "Location": {
                            "mX": 3,
                            "mY": 1
                        },
                        "RecoverDelay": 7.5
                    },
                    {
						//滚石砖
                        "Group": "boulder_forward",
                        "Location": {
                            "mX": 3,
                            "mY": 3
                        },
                        "RecoverDelay": 7.5
                    },
                    {
                        "Group": "flame",
                        "Location": {
                            "mX": 4,
                            "mY": 2
                        },
                        "RecoverDelay": 7.5
                    },
                    {
                        "Group": "flame",
                        "Location": {
                            "mX": 4,
                            "mY": 4
                        },
                        "RecoverDelay": 7.5
                    },
                    {
						//惊雷砖
                        "Group": "thunder",
                        "Location": {
                            "mX": 1,
                            "mY": 2
                        },
                        "RecoverDelay": 21.5
                    }
                ]
            }
        },
		
		//附加条件·倒计时
		//"RTID(LevelDeadLine@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"LevelDeadLine"
			],
			"objclass": "LevelDeadLineProps",
			"objdata": {
				"SuppressObjectiveTip": false,
				"Countdown": 300,
				//可填任意关卡事件或留空
				"Events": [
					""
				]
			}
		},
		
		//地图设置·设置海盗港湾甲板
		//"RTID(PiratePlanks@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"PiratePlanks"
			],
			"objclass": "PiratePlankProperties",
			"objdata": {
				"PlankRows": [
				0,
				2,
				4
				]
			}
		},
		//地图设置·设置初始潮水位置
		//"RTID(Tide0@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases": [
				"Tide0"
			],
			"objclass": "TideProperties",
			"objdata": {
				"StartingWaveLocation": 1
			}
		},
		
		//生成事件·生成僵尸
		//"RTID(Wave1@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave1"
			],
			"objclass": "SpawnZombiesJitteredWaveActionProps",
			"objdata": {
				//本波叶绿素含量
				"AdditionalPlantfood": 0,
				"Zombies": [
					{
						//特殊进场方式：暴风雪
						"Style": "snowstorm",           
						//第一列						
						"Column":"1",                 
						//僵尸名	
						"Type": "RTID(future_imp@ZombieTypes)",
						//第四行
						"Row": 4                               
					},
					{
						//特殊进场方式：沙尘暴
						"Style": "sandstorm",
						"Column":"1",
						"Type": "RTID(future_imp@ZombieTypes)",
						"Row": 4
					},
					{
						"Style": "snowstorm",
						"Column":"1",
						"Type": "RTID(future_imp@ZombieTypes)",
						"Row": 4
					},
					{
						"Row":1,
						"Type": "RTID(future_armor4@ZombieTypes)"
					}
				]
			}
		},
		
		//突袭事件·海盗登船
		//"RTID(Wave2RaidingPartyEvent0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases":[
				"Wave2RaidingPartyEvent0"
			],
			"objclass":"RaidingPartyZombieSpawnerProps",
			"objdata":{
				//每组飞索数量
				"GroupSize":1,
				//飞索数量
				"SwashbucklerCount":52,
				//组登船间隔
				"TimeBetweenGroups":1
			}
		},
		
		//突袭事件·火箭启动
		//"RTID(ROCKET_STRIKE@CurrentLevel)"
		//作为关卡事件
		{
            "aliases": [
                "ROCKET_STRIKE"
            ],
            "objclass": "RaidingPartyZombieSpawnerProps",
            "objdata": {
                "GroupSize": 2,
                "SwashbucklerCount": 8,
                "TimeBetweenGroups": 2.5,
                "ZombieType": "RTID(kongfu_rocket_imp@ZombieTypes)",
                "WaveStartMessage": "[WARNING_ROCKET_STRIKE]"
            }
        }
		
		//突袭事件·风暴裹挟
		//"RTID(Wave9StormSpawn@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave9StormSpawn"
			],
			"objclass": "StormZombieSpawnerProps",
			"objdata": {
				"ColumnEnd": 7,
				"ColumnStart": 6,
				"GroupSize": 3,
				"TimeBetweenGroups": 1,
				//暴风雪
				"Type": "snowstorm",
				"Waves": "",
				"Zombies": [
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"Type": "RTID(mech_cone@ZombieTypes)"
				}
				]
			}
		},
		{
			"aliases": [
				"Wave9StormSpawn"
			],
			"objclass": "StormZombieSpawnerProps",
			"objdata": {
				"ColumnEnd": 7,
				"ColumnStart": 6,
				"GroupSize": 3,
				"TimeBetweenGroups": 1,
				//沙尘暴
				"Type": "sandstorm",
				"Waves": "",
				"Zombies": [
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"Type": "RTID(mech_cone@ZombieTypes)"
				}
				]
			}
		},
		
		//突袭事件·金身降临
		//"RTID(Wave7QigongStrikeEvent0@CurrentLevel)"
		//作为关卡事件
		{
            "aliases": [
                "Wave7QigongStrikeEvent0"
            ],
            "objclass": "QigongStrikeWaveActionProps",
            "objdata": {
                "WaveStartMessage": "[WARNING_QIGONG_STRIKE]",
                "Zombies": [
                    {
                        "Type": "abbot_imp",
                        "Rows": [
                            1
                        ],
                        "Columns": [
                            4
                        ],
                        "Delay": 1
                    },
                    {
                        "Type": "abbot_imp",
                        "Rows": [
                            3
                        ],
                        "Columns": [
                            3
                        ],
                        "Delay": 2
                    }
                ]
            }
        },
		
		//突袭事件·退潮了
		//"RTID(Wave3LowTideEvent0@CurrentLevel)"
		//作为关卡事件
		//事实上只是单纯的冒僵尸，没潮水也能用
		{
			"aliases":[
				"Wave3LowTideEvent0"
			],
			"objclass":"BeachStageEventZombieSpawnerProps",
			"objdata":{
				"ColumnEnd":8,
				"ColumnStart":6,
				"GroupSize":"1",
				"TimeBeforeFullSpawn":"0.1",
				"TimeBetweenGroups":"0",
				"WaveStartMessage":"[WARNING_LOW_TIDE]", 
				"ZombieCount":"3",
				"ZombieName":"beach_imp"
			}
		},
		
		//突袭事件·潮水变化
		//"RTID(Wave9TidalChangeEvent0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave9TidalChangeEvent0"
			],
			"objclass": "TidalChangeWaveActionProps",
			"objdata": {
				"TidalChange": {
					"ChangeAmount": 5,
					"ChangeType": "absolute"
				}
			}
		},
		
		//突袭事件·失事跳伞
		//"RTID(Wave10ParachuteRainEvent0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases":[
				"Wave10ParachuteRainEvent0"
			],
			"objclass":"ParachuteRainZombieSpawnerProps",
			"objdata":{
				"ColumnEnd":7, 
				"ColumnStart":4, 
				"GroupSize":1, 
				"SpiderCount":11, 
				"SpiderZombieName":"lostcity_lostpilot",
				"TimeBeforeFullSpawn":6,
				"TimeBetweenGroups":0.5,
				"WaveStartMessage":"[WARNING_PARACHUTERAIN]",
				"ZombieFallTime":"12"
			}
		},
		
		//突袭事件·机械虫灾
		//"RTID(Wave2SpiderRainEvent0@CurrentLevel)"
		//作为关卡事件
		
		{
            "aliases": [
                "Wave2SpiderRainEvent0"
			],
            "objclass": "SpiderRainZombieSpawnerProps",
            "objdata": {
                "ColumnEnd": 7,
                "ColumnStart": 5,
                "GroupSize": 1,
                "SpiderCount": 6,
                "SpiderZombieName": "future_imp",
                "TimeBeforeFullSpawn": 1,
                "TimeBetweenGroups": 0.2,
                "WaveStartMessage": "[WARNING_SPIDERRAIN]",
                "ZombieFallTime": 1.5
            }
        },
		
		//突袭事件·喷气派对
		//"RTID(Wave6JetpackSpawnEvent0@CurrentLevel)"
		//作为关卡事件
		
		{
            "aliases": [
                "Wave6JetpackSpawnEvent0"
            ],
            "objclass": "SpawnZombiesFromGroundSpawnerProps",
            "objdata": {
                "ColumnEnd": 8,
                "ColumnStart": 4,
                "WaveStartMessage": "[WARNING_JETPACKRAIN]",
                "Zombies": [
                    {
                        "Type": "RTID(future_jetpack@ZombieTypes)"
                    },
					{
                        "Type": "RTID(future_jetpack@ZombieTypes)"
                    },
					{
                        "Type": "RTID(future_jetpack_disco@ZombieTypes)"
                    },
					{
                        "Type": "RTID(future_jetpack_disco@ZombieTypes)"
                    },
					{
                        "Type": "RTID(future_jetpack_veteran@ZombieTypes)"
                    },
					{
                        "Type": "RTID(future_imp@ZombieTypes)"
                    },
                    {
                        "Type": "RTID(future_imp@ZombieTypes)"
                    }
                ]
            }
        },
		
		//突袭事件·亡灵返乡
		//"RTID(Wave14GraveSpawnEvent0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave14GraveSpawnEvent0"
			],
			"objclass": "SpawnZombiesFromGridItemSpawnerProps",
			"objdata": {
				//叶绿素含量
				"AdditionalPlantfood": "0",
				//地物类型
				"GridTypes": [
					"RTID(gravestone_dark@GridItemTypes)",
					"RTID(gravestoneSunOnDestruction@GridItemTypes)",
					"RTID(gravestonePlantfoodOnDestruction@GridItemTypes)"
				],
				"WaveStartMessage": "[WARNING_GRAVESTONE_SPAWN]",
				"ZombieSpawnWaitTime": "1",
				"Zombies": [
					{
						"Type": "RTID(dark_armor2@ZombieTypes)"
					},
					{
						"Type": "RTID(dark_armor2@ZombieTypes)"
					},
					{
						"Type": "RTID(dark_armor1@ZombieTypes)"
					},
					{
						"Type": "RTID(dark@ZombieTypes)"
					}
				]
			}
		},
		
		//突袭事件·时空裂隙
		//"RTID(Wave5PortalsEvent0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave5PortalsEvent0"
			],
			"objclass": "SpawnModernPortalsWaveActionProps",
			"objdata": {
				"PortalColumn": 3,
				"PortalRow": "2",
				"PortalType": "egypt",
				"SpawnEffectAnimID": "",
				"SpawnSoundID": ""
			}
		},
		
		//生成事件·生成地物
		//"RTID(Wave1GraveSpawn@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Wave1GraveSpawn"
			],
			"objclass": "SpawnGravestonesWaveActionProps",
			"objdata": {
				"GravestonePool": [
					{
						//生成数量
						"Count":10,
						//种类
						"Type": "RTID(gravestone_future@GridItemTypes)"
					},
					{
						"Count": 2,
						"Type": "RTID(gravestoneSunOnDestruction@GridItemTypes)"
					}
				],
				"SpawnEffectAnimID": "POPANIM_EFFECTS_DIRT_SPAWN_DIRT",
				"SpawnEffectAnimPlay": "tomb_dirt_anim",
				//可能的生成位置
				"SpawnPositionsPool": [
				{
					"mX": 7,
					"mY": 1
				},
				{
					"mX": 7,
					"mY": 2
				},
				{
					"mX": 7,
					"mY": 3
				},
				{
					"mX": 7,
					"mY": 3
				}
				],
				"SpawnSoundID": "Play_Zomb_Egypt_TombRaiser_Grave_Rise!"
			}
		},
		
		//生成事件·随机生成地物
		//"RTID(Wave1GraveSpawn@CurrentLevel)"
		//作为关卡事件
		//待测试不确定能否使用
		{
			"aliases":[
				"Wave0GravestoneSpawn0"
			],
			"objclass":"GravestoneProperties",
			"objdata":{
				"GravestoneCount":5,
				"SpawnColumnEnd":9,
				"Type":"RTID(gravestone_dark@GridItemTypes)",
				"SpawnColumnStart":6
			}
		},
		
		//生成事件·生成植物
		//"RTID(FrozenPlantPlacement@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"FrozenPlantPlacement"
			],
			"objclass": "InitialPlantProperties",
			"objdata":{
				"InitialPlantPlacements": [
				{
					"GridX": 8,
					"GridY": 0,
					"TypeName": "shadowshroom",
					"Level": -1
				},
				{
					//被冰封
					"Condition": "icecubed",
					"GridX": 8,
					"GridY": 2,
					"TypeName": "shadowshroom",
					"Level": -1
				},
				{
					"GridX": 8,
					"GridY": 4,
					"TypeName": "shadowshroom",
					"Level": -1
				},
				{
					"GridX": 8,
					"GridY": 1,
					"TypeName": "moonflower",
					"Level": -1
				},
				{
					"GridX": 8,
					"GridY": 3,
					"TypeName": "moonflower",
					"Level": -1
				}
				]
			}
		},
		
		//生成事件·生成僵尸
		//"RTID(FrozenZombiePlacement@CurrentLevel)"
		//作为关卡事件
		//没错在选卡时时僵尸就可以在草坪上走了
		{
			"aliases":[
				"FrozenZombiePlacement"
			],
			"objclass":"InitialZombieProperties",
			"objdata":{
				"InitialZombiePlacements":[
				{
					//被冰封
					"Condition":"icecubed",
					"GridX":7,
					"GridY":0,
					"TypeName":"summer_bug"
				},
				{
					"Condition":"icecubed",
					"GridX":7,
					"GridY":1,
					"TypeName":"summer_bug"
				},
				{
					"Condition":"icecubed",
					"GridX":7,
					"GridY":2,
					"TypeName":"summer_bug"
				}
				]
			}
		},
		
		//挑战模式·限制事件
		//RTID(ChallengeModule@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
			"aliases":[
				"ChallengeModule"
			],
			"objclass":"StarChallengeModuleProperties",
			"objdata":{
				"Challenges":[
					//填入限制事件
					[
					"RTID(DoNotPlantBeforeLine@CurrentLevel)",
					"RTID(ZombieDistance@CurrentLevel)"
					]
				],
				"ChallengesAlwaysAvailable":true
			}
		},
		
		//限制事件·限制植物数量
		//RTID(DoNotPlantBeforeLine@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
            "aliases": [
                "SimultaneousPlants"
            ],
            "objclass": "StarChallengeSimultaneousPlantsProps",
            "objdata": {
                "MaximumPlants": 6
            }
        },
		
		//限制事件·禁止触碰花坛
		//RTID(ZombieDistance@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"ZombieDistance"
			],
			"objclass": "StarChallengeZombieDistanceProps",
			"objdata": {
				"TargetDistance": 5.5
			}
		},
		
		//限制事件·霉菌来袭
		//RTID(DoNotPlantBeforeLine@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"DoNotPlantBeforeLine"
			],
			"objclass": "MoldColonyChallengeProps",
			"objdata": {
				"MoldedSquares": [
				{
					"GridX": 1,
					"GridY": 1
				},
				{
					"GridX": 1,
					"GridY": 3
				}
				]
			}
		},
		//限制事件·霉菌来袭
		//RTID(DoNotPlantBeforeLine@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"DoNotPlantBeforeLine"
			],
            "objclass": "MoldColonyChallengeProps",
            "objdata": {
                "Locations": "RTID(nothingness@CurrentLevel)"
            }
        },
        {
            "aliases": [
                "nothingness"
            ],
            "objclass": "BoardGridMapProps",
            "objdata": {
				//1代表有霉菌
                "Values": [
                    [1,1,0,0,0,0,0,0,0],
                    [1,1,0,0,0,0,0,0,0],
                    [1,1,0,0,0,0,0,0,0],
                    [1,1,0,0,0,0,0,0,0],
                    [1,1,0,0,0,0,0,0,0]
                ]
            }
        },
		
		//限制事件·禁止失植
		//RTID(PlantsLost@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"PlantsLost"
			],
			"objclass": "StarChallengePlantsLostProps",
			"objdata": {
				"MaximumPlantsLost": 5
			}
		},
		
		//限制事件·生产阳光
		//RTID(SunProduced@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"SunProduced"
			],
			"objclass": "StarChallengeSunProducedProps",
			"objdata": {
				"TargetSun": 2000
			}
		},
		
		//限制事件·使用阳光
		//RTID(SunUsed@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"SunUsed"
			],
			"objclass": "StarChallengeSunUsedProps",
			"objdata": {
				"MaximumSun": 500
			}
		},
		
		//限制事件·快速击杀僵尸
		//RTID(KillZombies@CurrentLevel)"
		//用于ChallengeModule/Challenges[]
		{
			"aliases": [
				"KillZombies"
			],
			"objclass": "StarChallengeKillZombiesInTimeProps",
			"objdata": {
				"Time": 5,
				"ZombiesToKill": 10
			}
		},
		
		//特殊事件·信息红条
		//"RTID(Warning0@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Warning0"
			],
			"objclass": "WaveWarningProps",
			"objdata":{
				//字体颜色
				"LabelR":255,
				"LabelG":100,
				"LabelB":0,
				"LabelAInit":7,
				//描边颜色
				"OutlineR":0,
				"OutlineG":0,
				"OutlineB":0,
				"String":"La La Xu",
				"StringMultiLanguage":{
					"en":"La La Xu",
					"zh":"皇城"
				},
				"Sound":"HugeWave",
				"LabelTargetScale":0.5,
				"Duration":3,
				"InitTime":0.33
			}
		},
		
		//特殊事件·关卡提示
		//"RTID(Tips@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"Tips"
			],
			"objclass": "TutorialLabelProperties",
			"objdata":{
				"String":"df",
				"StringMultiLanguage":{
					"en":"TTTT",
					"zh":"鸟？？？"
				},
				"LifeSpan":5
			}
		},
		
		//特殊事件·立马吃席
		//"RTID(LoseGameImmediately@CurrentLevel)"
		//作为关卡事件
		//如果你喜欢这个事件不妨来试试solar_tomato的Right_on_target系列
		{
			"aliases": [
				"LoseGameImmediately"
			],
			"objclass": "LoseGameWaveActionProps",
			"objdata": {
				"Tip": {
				"en": "YOUR TAKING TOO LONG!",
				"zh": "你耗时已长！"
				},
				"SmallTip": {
				"en": "",
				"zh": ""
				}
			}
		},
		
		//规划事件·计时器
		//"RTID(Scheduler0@CurrentLevel)"
		//作为关卡事件、
		//注意循环引用
		{
			"aliases": [
				"Scheduler0"
			],
			"objclass": "WaveSchedulerProps",
			"objdata": {
				"TimeBeforeFirst": {
				"Max": 1.0,
				"Min": 1.0
				},
				"TimeBetween": {
				"Max": 0,
				"Min": 0
				},
				"Repeat": {
				"Max": 1,
				"Min": 1
				},
				"RewardWhenEnded": false,
				"SuppressRewardState": true,
				//填入关卡事件
				"Events": [
					"RTID(Wave1StormSpawn@CurrentLevel)",
					"RTID(Wave1StormSpawn@CurrentLevel)"
				]
			}
		},
		
		//规划事件·随机事件容器
		//"RTID(rweasels@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"rweasels"
			],
			"objclass": "RandomEventsProps",
			"objdata": {
				"EventCount": {
				"Min": 1,
				"Max": 1
				},
				//填入关卡事件
				"Events": [
				"RTID(weaselp0@CurrentLevel)",
				"RTID(weaselp1@CurrentLevel)",
				"RTID(weaselp2@CurrentLevel)",
				"RTID(weaselp3@CurrentLevel)",
				"RTID(weaselp4@CurrentLevel)"
				]
			}
		},
		
		//自定义·自定义时空裂缝
		//"RTID(butterfly50@CurrentLevel)"
		//作为关卡事件
		{
			"aliases": [
				"butterfly50"
			],
			"objclass": "SpawnModernPortalsWaveActionProps",
			"objdata": {
				"PortalColumn": 8,
				"PortalRow": "4",
				"PortalType": "RTID(butterfly50@CurrentLevel)",
				"SpawnEffectAnimID": "",
				"SpawnSoundID": ""
			}
		},
		//如果你喜欢这个自定义裂缝不妨来试试Iris的Butterfly系列
		{
			"objclass": "PortalType",
			"aliases": [
				"butterfly50"
			],
			"objdata": {
				"Properties": "RTID(butterfly50props@CurrentLevel)"
			}
		},
		
		{
			"objclass": "PortalProps",
			"aliases": [
				"butterfly50props"
			],
			"objdata": {
				"TimeBeforeFirst": {
				"Min": 35,
				"Max": 35
				},
				"TimeBetween": {
				"Min": 1,
				"Max": 1
				},
				"Scale": 150,
				"World": "summer_pockets",
				"ZombieTypesToSpawn": [
				]
			}
		},
		
		//自定义·自定义僵尸
		//"RTID(tutorial_imp44@CurrentLevel)"
		//作为僵尸类型
		/*
		使用示例：
		"Zombies": [
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"Type": "RTID(future_protector@ZombieTypes)"
				},
				{
					"RTID(tutorial44@CurrentLevel)"
				}
			]
		*/
		{
            "aliases": [
                "tutorial_imp44"
            ],
            "objclass": "ZombieType",
            "objdata": {
                "Properties": "RTID(tutorial_imp44@CurrentLevel)",
                "ZombieBasedOn": "tutorial_imp"
            }
        },
		//如果你喜欢这个自定义僵尸不妨来试试Navigate的Parallel Universe No.44系列
        {
            "objclass": "ZombieProperties",
            "aliases": [
                "tutorial_imp44"
            ],
			//复制"ZombieBasedOn"的ZombieProps然后进行修改
            "objdata": {
                "KilledByShrinkingViolet": true,
                "CannotBeGrabbedByPtero": true,
                "ZombieSort": "Normal",
                "IgnoredInWaves": true,
                "WalkSPS": 0.22,
                "EatDPS": 600,
                "Toughness": 100,
                "WavePointCost": 200,
                "Weight": 1000,
                "HitRect": "RTID(ImpHitRect@RectangleProps)",
                "AttackRect": "RTID(ImpAttackRect@RectangleProps)"
            }
        },
		
		//自定义·自定义对话
		//"FirstIntroNarrative": "MANGOSTEEN_4_INTRO"
		//"FirstOutroNarrative": "MANGOSTEEN_4_INTRO"
		//用于LevelDefinition
		/*
		使用示例：
		{
			"objclass": "LevelDefinition",
			"objdata": {
				"Description": "！",
				"LevelNumber": 1024,
				"FirstIntroNarrative": "MANGOSTEEN_4_INTRO",
				"FirstRewardParam":"MANGOSTEEN_4_REWARD",
				"Loot": "RTID(DefaultLoot@LevelModules)",
				"Modules": [
					"RTID(StandardIntro@LevelModules)",
					"RTID(SeedBank@CurrentLevel)",
					"RTID(NewWaves@CurrentLevel)",
					"RTID(DefaultZombieWinCondition@LevelModules)",
					"RTID(ZombiesDeadWinCon@LevelModules)"
				],
				"Name": "？",
				"WritenBy": "123",
				"StageModule": "RTID(SummerNightsStage@LevelModules)"
			}
		},
		*/
		{
			"objclass": "NarrativeProperties",
			"aliases": [
				"MANGOSTEEN_4_INTRO"
			],
			"objdata": {
				"Flow": [
				{
					"Character": "crazydave",
					"Action": "NPC_ENTER"
				},
				{
					"Character": "winnie",
					"Action": "NPC_ENTER"
				},
				{
					"Character": "crazydave",
					"Action": "SHOUT",
					"Lines": {
					"en": "Our Blooming Hearts are gone!",
					"zh": "我们的心蕊不见了！"
					}
				},
				//如果你喜欢这个自定义对话不妨来试试"SansGrinder/一只“衫”竹的mangosteen系列
				{
					"Character": "winnie",
					"Action": "TIRED",
					"Lines": {
					"en": "Our Blooming Hearts got sick and is incapable of attending today's warfare.",
					"zh": "我们的心蕊生病了，不能参与今天的任务。"
					}
				},
				{
					"Character": "winnie",
					"Action": "SAY",
					"Lines": {
					"en": "However, I broke the fourth wall and called for help.",
					"zh": "好在我打破了第四面墙并请来了救兵。"
					}
				},
				{
					"Character": "crazydave",
					"Action": "SAY",
					"Lines": {
					"en": "Won't he dock our wages for doing so though?",
					"zh": "打破第四面墙不是会扣工资的吗？"
					}
				}
				]
			}
		},
		
		//自定义·自定义防具
		//"RTID(snowpea1@CurrentLevel)"
		//作为防具类型
		/*
		使用示例：
		{
            "objclass": "ZombieProperties",
            "aliases": [
                "dark_king11"
            ],
            "objdata": {
                "KnightingAreaW": 4,
                "DelayBetweenKnightings": 3.5,
                "WalkSPS": 0.185,
                "EatDPS": 100,
                "Toughness": 7500,
                "NormalDeathWhenMowed": true,
				
				"ArmorToGive": "modern_armor1_1",
				
                "ImmuneToGarlic": true,
                "WavePointCost": 4000,
                "Weight": 2000,
                "HitRect": "RTID(DarkKingHitRect@RectangleProps)",
                "AttackRect": "RTID(DarkKingAttackRect@RectangleProps)",
                "PlantablePlants": [
                    "cherry_bomb"
                ],
                "ValidKnightTargets": [
                    "tutorial"
                ]
            }
        },
		*/
		{
			"aliases": [
				"modern_armor1_1"
			],
			"objclass": "ArmorType",
			"objdata": {
				"Properties": "RTID(modern_armor1_1@CurrentLevel)",
				"ArmorBasedOn": "modern_armor1"
			}
		},
		//如果你喜欢这个自定义防具不妨来试试砹化鈁FrAt的Parallel Universe No.43系列
		{
			"aliases": [
				"modern_armor1_1"
			],
			"objclass": "ArmorProperties",
			"objdata": {
				"Toughness": 3700,
				"isMetal": false,
				"BowlingLevel": 1
			}
		},
		
		//自定义·修改植物
		//"RTID(ModPlants@CurrentLevel)"
		//用于LevelDefinition/Modules[]
		{
            "aliases": [
                "ModPlants"
            ],
            "objclass": "PlantModifierProperties",
            "objdata": {
                "HidePlantfood": true,
                "SuppressParticle": true,
                "List": [
					{
						//修改原有的植物
						"Type": "solarsage",
						"NewObjdata": {
							//复制"Type"的PlantProps然后进行修改
							"MaxAttackTime": 1,
							"PlantfoodEnlightenCount": 3,
							"EnlightenWalkSPS": 0.3,
							"EnlightenChanceToInfect": 0,
							"EnlightenProduceInterval": {
								"Min": 10,
								"Max": 10
							},
							"Cooldown": 20,
							"CooldownFrom": 0.75,
							"SunCost": 75,
							"BeghouledCost": 500,
							"ProjectileType": "solarsage",
							"Toughness": 300,
							"Family": "Sun"
						}
					}
				]
			}
		},
		
}










{PlantName

杰克南瓜 - jackolantern

教程
豌豆射手 - peashooter
向日葵 - sunflower
坚果墙 - wallnut
土豆地雷 - potatomine

上古埃及
卷心菜投手 - cabbagepult
回旋镖射手 - bloomerang
冰冻生菜 - iceburg
噬碑藤 - gravebuster
菜问 - bonkchoy
双重射手 - repeater
双胞向日葵 - twinsunflower

海盗港湾
弹簧豆 - springbean
玉米投手 - kernelpult
三线射手 - threepeater
椰子加农炮 - coconutcannon
火龙草 - snapdragon
地刺 - spikeweed
钢地刺 - spikerock
樱桃炸弹 - cherry_bomb

狂野西部
裂荚射手 - splitpea
巴豆 - chilibean
高坚果 - tallnut
闪电芦苇 - lightningreed
豌豆荚 - peapod
西瓜投手 - melonpult
冰西瓜 - wintermelon

遥远未来
棱镜草 - magnifyinggrass
三叶草 - blover
脉冲黄桃 - empea
充能柚子 - citron
激光豆 - laser_bean
瓷砖萝卜 - powerplant
瓷砖萝卜 - powerplant_alpha
瓷砖萝卜 - powerplant_beta
瓷砖萝卜 - powerplant_gamma
瓷砖萝卜 - powerplant_delta
瓷砖萝卜 - powerplant_epsilon
全息坚果 - holonut

冰河时代
甜椒投手 - pepperpult
烤马铃薯 - hotpotato
眩晕洋葱 - stunion
旋转芜菁 - xshot
甜菜护卫 - chardguard

巨浪沙滩
莲叶 - lilypad
缠绕水草 - tanglekelp
保龄泡泡 - bowlingbulb
鳄梨 - guacodile
香蕉火箭炮 - banana

黑暗时代
阳光菇 - sunshroom
大喷菇 - fumeshroom
小喷菇 - puffshroom
磁力菇 - magnetshroom
阳光豆 - sunbean

遗落古城
黄金叶 - goldleaf
AKEE - akee
红针花 - redstinger
大丽菊 - stallia
榴莲 - endurian

摩登年代/现代年华
月光花 - moonflower
毒影菇 - shadowshroom
暗影龙葵 - nightshade
幽暮投手 - dusklobber
暗樱草 - grimrose

云端堡垒
月亮豆 - moonbean
飞天射手 - skyshooter

504m/武林寺庙
寒冰射手 - snowpea
火葫芦 - firegourd
竹笋 - bambooshoot
白萝卜 - turnip
仙桃 - peach
竹篮 - bamboobusket
阳光鼠尾草 - solarsage
荔枝 - lychee
哈密瓜投手 - cantaloupe

侏罗纪沼泽
原始豌豆射手 - primalpeashooter
原始坚果墙 - primalwallnut
原始土豆地雷 - primalpotatomine
原始向日葵 - primalsunflower
香水菇 - perfumeshroom

炫光魔音游/摇滚年代
魔音甜菜 - phatbeet
音游甜菜 - phatbeet_rhythm
逆时草 - thymewarp
大蒜 - garlic
孢子菇 - sporeshroom
复活萝卜 - intensivecarrot
潜伏芹菜 - celerystalker


伞叶 - umbrellaleaf
大嘴花 - chomper
寒冰菇 - glaciershroom
超级机枪射手 - megagatling
胆小菇 - scaredyshroom
黄油毛茛 - buttercup
槲寄冰仙子 - missiletoe
导向蓟 - homingthistle
星星果 - starfruit
流星果 - shootingstarfruit
毁灭菇 - doomshroom
飞天花盆 - floawerPot
火焰豌豆 - firepeashooter
果冻蔓越莓 - cranjelly
火炬树桩 - torchwood
火爆辣椒 - jalapeno
流星花 - meteorflower
吸血牛肝菌 - vamporcini
仙人掌 - cactus
能量花 - powerlily
机枪射手 - gatling
飓风甘蓝 - hurrikale
暴君火龙果 - dragonbruit
小暴君火龙果 - dragonbabybruit
电能豌豆 - electricpeashooter
倭瓜 - squash
忧郁菇 - gloomshroom
树脂投手 - sapfling
防风草 - parsnip
爆炸坚果 - explodeonut
爆裂葡萄 - grapeshot
路灯花 - plantern
蒲公英 - dandelion
魅惑菇 - hypnoshroom
电流醋栗 - electriccurrant
逃脱树根 - escaperoot
模仿者 - imitater
苹果迫击炮 - applemortar
阳光番茄 - solartomato
花生 - peanut
幽灵辣椒 - ghostpepper
甜薯 - sweetpotato
金蟾菇 - toadstool
岩浆番石榴 - lavaguava
爆浆草莓 - strawburst
海蘑菇 - seashroom
闪电蓝莓 - electricblueberry
冰龙草 - coldsnapdragon
黄金蓓蕾 - goldbloom
心蕊 - bloominghearts
雪滴花 - snowdrop
畏缩紫罗兰 - shrinkingviolet
热辣海枣 - hotdate
整人竹 - bamboozle
冰地刺 - iceweed
天使星星果 - pinkstarfruit
寒冰蓓蕾 - icebloom
豆腐尸荚 - zoybeanpod
原子石榴弹 - atombomb
小种子 - seedling
原子石榴弹 - atombomb_seedling
冬青骑士 - hollyknight
冬青骑士障碍 - hollybarrierleaf
叶绿素冬青骑士障碍 - hollybarrierleafplantfood
芦荟 - aloe
超能花菜 - caulipower
香果胶 - gumnut
海豌豆 - seashooter
暗影豌豆 - shadowpeashooter
暗影夏威夷果 - murkadamia
暗影油桃 - noctarine
大嘴豌豆 - snappea

柴火藤蔓 - pyrevine
闪耀藤蔓 - shinevine
豌豆藤蔓 - pvine
忧郁藤蔓 - gloomvine
南瓜头 - pumpkin

金盏花 - marigold
火红金盏花 - marigold_red
爆裂金盏花 - marigold_orange
耀黄金盏花 - marigold_yellow
豌豆金盏花 - marigold_green
冰蓝金盏花 - marigold_blue
魔力金盏花 - marigold_pink
紫毒金盏花 - marigold_purple

速度药水 - zombiepotion_speed
健壮药水 - zombiepotion_toughness
隐身药水 - zombiepotion_invisibility

青色保龄球 - tool_projectile_bowlingbulb1
蓝色保龄球 - tool_projectile_bowlingbulb2
橙色保龄球 - tool_projectile_bowlingbulb3
充能保龄球 - tool_projectile_bowlingbulb_explode
坚果保龄球 - tool_projectile_bowling_wallnut
爆炸坚果保龄球 - tool_projectile_bowling_explodeonut
全息坚果保龄球 - tool_projectile_bowling_holonut
原始坚果保龄球 - tool_projectile_bowling_primalwallnut
冰冻保龄球 - tool_projectile_bowlingbulb_iceburg
高坚果保龄球 - tool_projectile_bowling_tallnut


防御薄荷 - reinforcemint
启明薄荷 - enlightenmint
寒冻薄荷 - wintermint
穿刺薄荷 - spearmint
平射薄荷 - appeasemint
健壮薄荷 - enforcemint
热辣薄荷 - peppermint
爆裂薄荷 - bombardmint
暗影薄荷 - concealmint
剧毒薄荷 - ailmint
魔法薄荷 - enchantmint
电能薄荷 - filamint
滞缓薄荷 - containmint
军械薄荷 - armamint
}

{ZombieName

普通僵尸 - tutorial
路障僵尸 - tutorial_armor1
铁桶僵尸 - tutorial_armor2
砖头僵尸 - tutorial_armor4
旗帜僵尸 - tutorial_flag
大动员僵尸 - tutorial_flag_veteran

鸭子泳圈僵尸 - duckytube
路障泳圈僵尸 - duckytube_armor1
铁桶泳圈僵尸 - duckytube_armor2
砖头泳圈僵尸 - duckytube_armor4
泳圈旗帜僵尸 - duckytube_flag
泳圈大动员僵尸 - duckytube_flag_veteran

小鬼 - tutorial_imp
巨尸 - tutorial_gargantuar
瓶中巨尸 - vase_gargantuar
惊喜巨尸 - birthday_gargantuar
喷气派对僵尸 - birthday_jetpack

读报僵尸/二爷 - modern_newspaper
周刊僵尸/大爷 - newspaper_veteran
气球僵尸 - modern_balloon
全明星僵尸 - modern_allstar
狂热粉丝小鬼 - modern_superfanimp

造冰车僵尸 - zomboni
雪橇运动员僵尸 - bobsled
雪橇小队 - bobsled_team
投石车僵尸 - catapult

木乃伊僵尸 - mummy
路障木乃伊 - mummy_armor1
铁桶木乃伊 - mummy_armor2
金字塔头木乃伊 - mummy_armor4
旗帜木乃伊 - mummy_flag
大动员木乃伊 - mummy_flag_veteran
太阳神僵尸 - ra
骆驼牌僵尸 - camel_segment
骆驼牌僵尸 - camel_onehump
记忆骆驼牌僵尸 - camel_segment_touch
记忆骆驼牌僵尸 - camel_onehump_touch
火把僵尸 - explorer
火光僵尸 - explorer_veteran
死神僵尸 - tomb_raiser
法老 - pharaoh_inner
脆弱法老僵尸 - pharaoh_weak
法老僵尸 - pharaoh
木乃伊小鬼 - egypt_imp
木乃伊巨尸 - egypt_gargantuar

海盗僵尸 - pirate
路障海盗 - pirate_armor1
铁桶海盗 - pirate_armor2
木桶头海盗 - pirate_armor4
海盗旗僵尸 - pirate_flag
大动员海盗旗僵尸 - pirate_flag_veteran
荡索僵尸 - swashbuckler
海鸥僵尸 - seagull
鹈鹕僵尸 - pelican
滚桶僵尸 - barrelroller
木桶 - pirate_barrel
小鬼炮 - cannon
海盗船长僵尸 - pirate_captain
僵尸鹦鹉 - pirate_captain_parrot
海盗小鬼 - pirate_imp
海盗巨尸 - pirate_gargantuar


牛仔僵尸 - cowboy
路障牛仔 - cowboy_armor1
铁桶牛仔 - cowboy_armor2
矿车头牛仔 - cowboy_armor4
旗帜牛仔 - cowboy_flag
大动员牛仔 - cowboy_flag_veteran
淘金僵尸 - prospector
钢琴僵尸 - piano
斗篷僵尸 - poncho
斗篷僵尸 - poncho_no_plate
斗篷僵尸 - poncho_plate
牧鸡僵尸 - chicken_farmer
僵尸鸡 - chicken
南瓜鸡 - chicken_pumpkin
机械牛/黄牛 - west_bull
骑牛竞技传奇/黑牛 - west_bull_veteran
牛骑手 - west_bullrider
西部巨尸 - cowboy_gargantuar

未来僵尸 - future
未来路障僵尸 - future_armor1
未来铁桶僵尸 - future_armor2
全息头僵尸 - future_armor4
未来旗帜僵尸 - future_flag
未来大动员僵尸 - future_flag_veteran
喷气背包僵尸 - future_jetpack
喷气宇航员僵尸 - future_jetpack_veteran
喷气迪斯科僵尸 - future_jetpack_disco
电磁盾僵尸 - future_protector
机甲路障僵尸 - mech_cone
机甲橄榄球盔僵尸 - football_mech
迪斯科 3000 - disco_mech
机械虫小鬼 - future_imp
巨尸统领者 - future_gargantuar

防护盾 - future_protector_shield
全息坚果防护盾 - future_infinut_shield
月光花防护盾 - modern_moonflower_shield

农夫僵尸 - dark
路障农夫 - dark_armor1
铁桶农夫 - dark_armor2
骑士僵尸 - dark_armor3
城堡头僵尸 - dark_armor4
旗帜农夫僵尸 - dark_flag
农夫大动员僵尸 - dark_flag_veteran
弄臣僵尸 - dark_juggler
巫师僵尸 - dark_wizard
甘道夫僵尸 - dark_wizard_veteran
国王僵尸 - dark_king
亚瑟王僵尸 - dark_king_veteran
火龙小鬼 - dark_imp_dragon
僧侣小鬼 - dark_imp
黑暗巨尸 - dark_gargantuar

飞机头僵尸 - beach
路障飞机头 - beach_armor1
铁桶飞机头 - beach_armor2
螃蟹飞机头 - beach_armor4
比基尼僵尸 - beach_fem
路障比基尼 - beach_fem_armor1
铁桶比基尼 - beach_fem_armor2
螃蟹比基尼 - beach_fem_armor4
沙滩旗帜僵尸 - beach_flag
沙滩大动员僵尸 - beach_flag_veteran
浮潜僵尸 - beach_snorkel
冲浪僵尸 - beach_surfer
摩托冲浪僵尸 - beach_surfer_veteran
章鱼僵尸 - beach_octopus
渔夫僵尸 - beach_fisherman
美人鱼小鬼 - beach_imp
深海巨尸 - beach_gargantuar

洞窟僵尸 - iceage
洞窟路障僵尸 - iceage_armor1
洞窟铁桶僵尸 - iceage_armor2
冰砖头僵尸 - iceage_armor3
猛犸头僵尸 - iceage_armor4
洞窟旗帜僵尸 - iceage_flag
洞窟大动员僵尸 - iceage_flag_veteran
猎人僵尸 - iceage_hunter
猎人领袖僵尸 - iceage_hunter_veteran
渡渡鸟骑手 - iceage_dodo
穴居僵尸 - iceage_troglobite
穴居（一砖）僵尸 - iceage_troglobite_1block
穴居（二砖）僵尸 - iceage_troglobite_2block
穴居首领僵尸 - iceage_troglobite_veteran
囤鼬僵尸 - iceage_weaselhoarder
冰鼬 - iceage_weasel
雪人小鬼 - iceage_imp
树懒皮巨尸 - iceage_gargantuar

探宝僵尸 - lostcity
路障探宝家 - lostcity_armor1
铁桶探宝家 - lostcity_armor2
帐篷头探宝家 - lostcity_armor4
旗帜探宝家 - lostcity_flag
大动员探宝家 - lostcity_flag_veteran
失事飞行员僵尸 - lostcity_lostpilot
救援飞行员僵尸/蹦极僵尸 - lostcity_lostpilot_veteran
发掘者僵尸 - lostcity_excavator
阳伞僵尸 - lostcity_jane
蜻蜓僵尸 - lostcity_bug
路障蜻蜓僵尸 - lostcity_bug_armor1
铁桶蜻蜓僵尸 - lostcity_bug_armor2
帐篷头蜻蜓僵尸 - lostcity_bug_armor4
遗迹猎宝僵尸 - lostcity_relichunter
搬运工小鬼 - lostcity_impporter
青骷髅头僵尸 - lostcity_crystalskull
失落之城小鬼 - lostcity_imp
搬运工巨尸 - lostcity_gargantuar

武斗僵尸 - kongfu
武斗路障僵尸 - kongfu_armor1
武斗铁壶僵尸 - kongfu_armor2
武斗铁盔僵尸 - kongfu_armor3
武斗香炉僵尸 - kongfu_armor4
武斗旗帜僵尸 - kongfu_flag
武斗大动员僵尸 - kongfu_flag_veteran
大锤僵尸 - kongfu_hammer
伙夫僵尸 - kongfu_torch
自爆僵尸 - kongfu_bomb
铜锣僵尸 - kongfu_gong
醉酒僵尸 - kongfu_drink
气功僵尸 - kongfu_chi
火箭小鬼 - kongfu_rocket_imp

武僧僵尸 - monk
武僧路障僵尸 - monk_armor1
武僧铁壶僵尸 - monk_armor2
武僧铁盔僵尸 - monk_armor3
武僧香炉僵尸 - monk_armor4
武僧旗帜僵尸 - monk_flag
武僧大动员僵尸 - monk_flag_veteran
舞刀武僧 - monk_blade
弄棍武僧 - monk_nunchaku
火把武僧 - monk_torch
醉酒武僧 - monk_drink
三倍醉酒武僧 - monk_drink_veteran
轻功小鬼 - monk_imp

住持僵尸 - abbot
住持路障僵尸 - abbot_armor1
住持铁壶僵尸 - abbot_armor2
住持铁盔僵尸 - abbot_armor3
住持香炉僵尸 - abbot_armor4
住持旗帜僵尸 - abbot_flag
住持大动员僵尸 - abbot_flag_veteran
吹火神技 - abbot_torch
神风侠侣 - abbot_fan
舞棍弄影 - abbot_3section_staff
气定神闲 - abbot_chi
普天金身 - abbot_imp
铜人雕像 - kongfu_bronze_statue
大汉铜人 - kongfu_bronze_strong
侠客铜人 - kongfu_bronze_hook
气功铜人 - kongfu_bronze_chi

火药魔头 - kongfu_boss_explode
持刀大侠 - kongfu_boss_blade
气功教主 - kongfu_boss_chi

飞行员僵尸 - sky
路障飞行员 - sky_armor1
铁桶飞行员 - sky_armor2
旗帜飞行员 - sky_flag

霓虹僵尸 - eighties
霓虹路障僵尸 - eighties_armor1
霓虹铁桶僵尸 - eighties_armor2
聚光灯霓虹僵尸 - eighties_armor4
霓虹旗帜僵尸 - eighties_flag
霓虹大动员僵尸 - eighties_flag_veteran
朋克僵尸 - eighties_punk
闪耀僵尸/大姐 - eighties_glitter
麦克说唱家 - eighties_mc
霹雳舞僵尸 - eighties_breakdancer
街机僵尸 - eighties_arcade
像素僵尸 - eighties_8bit
像素路障僵尸 - eighties_8bit_armor1
像素铁桶僵尸 - eighties_8bit_armor2
音箱僵尸 - eighties_boombox
朋克小鬼 - eighties_imp
重金属巨尸 - eighties_gargantuar

侏罗纪僵尸 - dino
侏罗纪路障僵尸 - dino_armor1
侏罗纪铁桶僵尸 - dino_armor2
侏罗纪龙骨头僵尸 - dino_armor3
琥珀头僵尸 - dino_armor4
侏罗纪旗帜僵尸 - dino_flag
侏罗纪大动员僵尸 - dino_flag_veteran
侏罗纪野人僵尸 - dino_bully
侏罗纪打火石野人/三爷 - dino_bully_veteran
侏罗纪小鬼 - dino_imp
侏罗纪巨尸 - dino_gargantuar

豆腐僵尸 - zoybean
胡萝卜豆腐僵尸 - zoybean_armor1
瓜瓢豆腐僵尸 - zoybean_armor2
豆腐巨尸 - zoybean_gargantuar

仲夏夜僵尸 - summer_basic
仲夏夜路障 - summer_armor1
仲夏夜铁桶 - summer_armor2
仲夏夜旗帜僵尸 - summer_flag
萤火虫僵尸 - summer_bug
路障萤火虫 - summer_bug_armor1
铁桶萤火虫 - summer_bug_armor2
烤肠小鬼 - summer_imp
烧烤之王 - summer_gargantuar

骷髅装僵尸 - halloween
路障骷髅装 - halloween_armor1
铁桶骷髅装 - halloween_armor2
旗帜稻草人 - halloween_flag
万圣节木乃伊小鬼 - halloween_imp
弗兰肯斯坦巨尸 - halloween_gargantuar

觅食僵尸 - foodfight
路障觅食僵尸 - foodfight_armor1
铁桶觅食僵尸 - foodfight_armor2
旗帜觅食僵尸 - foodfight_flag
觅者之王 - foodfight_gobbler_king
僵尸火鸡 - foodfight_turkey
厨艺杂耍僵尸 - foodfight_chefster

圣诞僵尸 - feastivus
圣诞路障僵尸 - feastivus_armor1
圣诞铁桶僵尸 - feastivus_armor2
圣诞旗帜僵尸 - feastivus_flag
圣诞骆驼牌僵尸 - feastivus_camel_segment
圣诞骆驼牌僵尸 - feastivus_camel_onehump
圣诞荡索僵尸 - feastivus_swashbuckler
圣诞奏琴僵尸 - feastivus_piano
圣诞斗篷僵尸 - feastivus_poncho
圣诞斗篷僵尸 - feastivus_poncho_no_plate
圣诞斗篷僵尸 - feastivus_poncho_plate
圣诞小鬼 - feastivus_imp
节庆小鬼 - holiday_imp
圣诞巨尸 - feastivus_gargantuar
节庆巨尸 - holiday_gargantuar

场地普通僵尸 - lawn
场地路障僵尸 - lawn_armor1
场地铁桶僵尸 - lawn_armor2
场地铁盔僵尸 - lawn_armor3
场地砖头僵尸 - lawn_armor4
场地旗帜僵尸 - lawn_flag
场地大动员僵尸 - lawn_flag_veteran
新年狂热粉丝小鬼 - lunar_superfanimp
}

{TombstoneName
Tutorial - gravestone_tutorial
法老之碑 - gravestone_egypt
船长之墓 - gravestone_pirate
斗牛之坟 - gravestone_cowboy
喷气之终 - gravestone_future
晦暗之源 - gravestone_dark
晦暗光源 - gravestoneSunOnDestruction
晦暗叶源 - gravestonePlantfoodOnDestruction
薪火武器架 - kongfu_rack_torch
名刀武器架 - kongfu_rack_blade
炸弹武器架 - kongfu_rack_bomb
旌旗武器架 - kongfu_rack_flag
双棍武器架 - kongfu_rack_nunchaku
神锤武器架 - kongfu_rack_hammer
铁盔武器架 - kongfu_rack_helmet
法扇武器架 - kongfu_rack_fan
三辊武器架 - kongfu_rack_3section_staff
火药桶 - kongfu_TNT
冲浪板 - surfboard
章鱼 - planttarget_squid
摩托冲浪板 - surfboard_veteran
冰封之寂 - gravestone_iceage
永冻之叶 - planttarget_iceblock
冰封之尸 - zombietarget_iceblock
猛犸之始 - zomboss_iceage_glacier_block
遗落之铭 - gravestone_lostcity
遗落背包 - backpack
遗落帐篷 - tent
炫彩街机 - eightiesarcadecabinet
爆震音响 - speaker
}

{ArmorName
BasicCone - modern_armor1
BasicBucket - modern_armor2
BasicBricks - modern_armor4
FoodFightCone - foodfight_armor1
FoodFightBucket - foodfight_armor2
EgyptCone - egypt_armor1
EgyptBucket - egypt_armor2
EgyptBricks - egypt_armor4
FutureCone - future_armor1
FutureBucket - future_armor2
FutureBricks - future_armor4
PirateCone - pirate_armor1
PirateBucket - pirate_armor2
PirateBricks - pirate_armor4
CowboyCone - cowboy_armor1
CowboyBucket - cowboy_armor2
CowboyBricks - cowboy_armor4
HolidayCone - feastivus_armor1
HolidayBucket - feastivus_armor2
KongfuCone - kongfu_armor1
KongfuBucket - kongfu_armor2
KongfuHelmet - kongfu_armor3
KongfuBricks - kongfu_armor4
ZoybeanCone - zoybean_armor1
ZoybeanBucket - zoybean_armor2
HalloweenCone - halloween_armor1
HalloweenBucket - halloween_armor2
HalloweenHelmet - halloween_armor3
DarkCone - dark_armor1
DarkBucket - dark_armor2
DarkHelmet - dark_armor3
DarkBricks - dark_armor4
BeachCone - beach_armor1
BeachBucket - beach_armor2
BeachBricks - beach_armor4
IceageCone - iceage_armor1
IceageBucket - iceage_armor2
IceageHelmet - iceage_armor3
IceageBricks - iceage_armor4
LostcityCone - lostcity_armor1
LostcityBucket - lostcity_armor2
LostcityBricks - lostcity_armor4
SummerCone - summer_armor1
SummerBucket - summer_armor2
SkyCone - sky_armor1
SkyBucket - sky_armor2
EightiesCone - eighties_armor1
EightiesBucket - eighties_armor2
EightiesBricks - eighties_armor4
Eighties8BitCone - eighties_8bit_armor1
Eighties8BitBucket - eighties_8bit_armor2
DinoCone - dino_armor1
DinoBucket - dino_armor2
DinoHelmet - dino_armor3
DinoBricks - dino_armor4
}

{TileName
瓷砖·Alpha - powertile_alpha
瓷砖·Beta - powertile_beta
瓷砖·Gamma - powertile_gamma
瓷砖·Delta - powertile_delta
瓷砖·Epsilon - powertile_epsilon
矿车 - railcart
铁轨 - rail
危险中的植物 - endangered
PotholePuddle - potholepuddle
暗影润泽 - shallowpuddle
冰移·上 - slider_up
冰移·下 - slider_down
浮漂·上 - slider_up_modern
浮漂·下 - slider_down_modern
遗落金砖 - goldtile
太极地砖 - taichitile
遗落火砖 - flame_spreader_trap
遗落石砖·前 - boulder_trap_falling_forward
遗落石砖·后 - boulder_trap_falling_backward
遗落雷砖 - thunder_trap
}

{TileLiquidName
树脂 - sapfling
黄油 - butter
蔓越莓果酱 - cranjelly
流星坑 - moltenpool
岩浆池 - lavaguava
}

{DinoName
迅猛龙 - raptor
剑龙 - stego
翼龙 - ptero
暴龙 - tyranno
甲龙 - ankylo
}

{LawnName
Modern - ModernStage
FrontyardNight - ModernNightStage
Egypt - EgyptStage
EgyptNight - EgyptNightStage
Pirate - PirateStage
Cowboy - WestStage
Kongfu - KongfuStage
Kongfu - MonkStage
Kongfu - AbbotStage
KongfuVeteran - KongfuBossStage
Future - FutureStage
FutureNight - FutureNightStage
Dark - DarkStage
Beach - BeachStage
Iceage - IceageStage
IceageUlt - IceageVeteranStage
LostCity - LostCityStage
LostCityNight - LostCityNightStage
Sky - SkyStage
Eighties - EightiesStage
Dino - DinoStage
FrontyardCircus - CircusStage
FrontyardDark - DarkTutorialStage
FrontyardBeach - BeachTutorialStage
FrontyardIceage - IceageTutorialStage
FrontyardLostCity - LostCityTutorialStage
FrontyardEighties - EightiesTutorialStage
FrontyardDino - DinoTutorialStage
FrontyardSummerNight - SummerNightsStage
FrontyardLunar - LunarStage
FrontyardHalloween - HalloweenStage
FrontyardFarm - FarmStage
FrontyardHeroes - HeroesStage
FrontyardPaddys - PaddysStage
FrontyardFalls - FallsStage
FrontyardValentines - ValentinesStage
FrontyardXmas - FeastivusStage
FrontyardXmasNight - FeastivusNightStage
Persuit - PersuitStage
Arena - ArenaStage
Green - GreenStage
Tutorial - TutorialStage
}
