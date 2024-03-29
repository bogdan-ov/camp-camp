import { Engine } from "./engine";
import { Assets } from "./engine/core/Assets";
import TitleScreenStage from "./stages/TitleScreenStage";
import Translate from "./managers/Translate";

// Import images
import cursor_png from "./assets/images/gui/cursor.png";
import humanIcon_png from "./assets/images/gui/human-icon.png";
import foodIcon_png from "./assets/images/gui/food-icon.png";
import woodIcon_png from "./assets/images/gui/wood-icon.png";
import stoneIcon_png from "./assets/images/gui/stone-icon.png";
import happinessIcon_png from "./assets/images/gui/happiness-icon.png";
import staminaIcon_png from "./assets/images/gui/stamina-icon.png";
import saturationIcon_png from "./assets/images/gui/saturation-icon.png";
import order_png from "./assets/images/gui/order.png";
import orderIcon_png from "./assets/images/gui/order-icon.png";
import happyEmotion_png from "./assets/images/gui/happy-emotion.png";
import sadEmotion_png from "./assets/images/gui/sad-emotion.png";
import angryEmotion_png from "./assets/images/gui/angry-emotion.png";
import tiredEmotion_png from "./assets/images/gui/tired-emotion.png";
import foodEmotion_png from "./assets/images/gui/food-emotion.png";
import nextTabIcon_png from "./assets/images/gui/next-tab-icon.png";
import placingArea1x1_png from "./assets/images/gui/placing-area-1x1.png";
import placingArea2x1_png from "./assets/images/gui/placing-area-2x1.png";
import placingArea2x2_png from "./assets/images/gui/placing-area-2x2.png";

import house_png from "./assets/images/cells/house.png";
import gardener_png from "./assets/images/cells/gardener.png";
import builder_png from "./assets/images/cells/builder.png";
import architect_png from "./assets/images/cells/architect.png";
import miner_png from "./assets/images/cells/miner.png";
import campfire_png from "./assets/images/cells/campfire.png";
import statue_png from "./assets/images/cells/statue.png";

import layout1x1_png from "./assets/images/cells/layout-1x1.png";
import layout2x1_png from "./assets/images/cells/layout-2x1.png";
import scaffolding1x1_png from "./assets/images/cells/scaffolding-1x1.png";
import scaffolding2x1_png from "./assets/images/cells/scaffolding-2x1.png";

import farmland_png from "./assets/images/cells/farmland.png";
import tree_png from "./assets/images/cells/tree.png";
import appleTree_png from "./assets/images/cells/apple-tree.png";
import grass_png from "./assets/images/cells/grass.png";
import stone_png from "./assets/images/cells/stone.png";
import sapling_png from "./assets/images/cells/sapling.png";
import wheat_png from "./assets/images/cells/wheat.png";

import largeHuman_png from "./assets/images/entities/large-human.png";

import leafParticle_png from "./assets/images/particles/leaf-particle.png";
import fireParticle_png from "./assets/images/particles/fire-particle.png";
import orderParticle_png from "./assets/images/particles/order-particle.png";
import stoneParticle_png from "./assets/images/particles/stone-particle.png";
import fireworkParticle_png from "./assets/images/particles/firework-particle.png";
import cloudParticle_png from "./assets/images/particles/cloud-particle.png";

import logo_png from "./assets/images/gui/logo.png";
import bogdanov_png from "./assets/images/gui/bogdanov.png";

import GameStage from "./GameStage";
import Config from "./utils/Config";

Engine.prestart = ()=> {
    // Load images
    Assets.loadImage("cursor", cursor_png);
    Assets.loadImage("human-icon", humanIcon_png);
    Assets.loadImage("food-icon", foodIcon_png);
    Assets.loadImage("wood-icon", woodIcon_png);
    Assets.loadImage("stone-icon", stoneIcon_png);
    Assets.loadImage("happiness-icon", happinessIcon_png);
    Assets.loadImage("stamina-icon", staminaIcon_png);
    Assets.loadImage("saturation-icon", saturationIcon_png);
    Assets.loadImage("order", order_png);
    Assets.loadImage("order-icon", orderIcon_png);
    Assets.loadImage("happy-emotion", happyEmotion_png);
    Assets.loadImage("sad-emotion", sadEmotion_png);
    Assets.loadImage("angry-emotion", angryEmotion_png);
    Assets.loadImage("tired-emotion", tiredEmotion_png);
    Assets.loadImage("food-emotion", foodEmotion_png);
    Assets.loadImage("next-tab-icon", nextTabIcon_png);
    Assets.loadImage("placing-area-1x1", placingArea1x1_png);
    Assets.loadImage("placing-area-2x1", placingArea2x1_png);
    Assets.loadImage("placing-area-2x2", placingArea2x2_png);

    Assets.loadImage("house", house_png);
    Assets.loadImage("gardener", gardener_png);
    Assets.loadImage("builder", builder_png);
    Assets.loadImage("architect", architect_png);
    Assets.loadImage("miner", miner_png);
    
    Assets.loadImage("campfire", campfire_png);
    Assets.loadImage("statue", statue_png);

    Assets.loadImage("layout-1x1", layout1x1_png);
    Assets.loadImage("layout-2x1", layout2x1_png);
    Assets.loadImage("scaffolding-1x1", scaffolding1x1_png);
    Assets.loadImage("scaffolding-2x1", scaffolding2x1_png);

    Assets.loadImage("farmland", farmland_png);
    Assets.loadImage("tree", tree_png);
    Assets.loadImage("apple-tree", appleTree_png);
    Assets.loadImage("grass", grass_png);
    Assets.loadImage("stone", stone_png);
    Assets.loadImage("sapling", sapling_png);
    Assets.loadImage("wheat", wheat_png);

    Assets.loadImage("large-human", largeHuman_png);

    Assets.loadImage("leaf-particle", leafParticle_png);
    Assets.loadImage("fire-particle", fireParticle_png);
    Assets.loadImage("order-particle", orderParticle_png);
    Assets.loadImage("stone-particle", stoneParticle_png);
    Assets.loadImage("firework-particle", fireworkParticle_png);
    Assets.loadImage("cloud-particle", cloudParticle_png);

    Assets.loadImage("logo", logo_png);
    Assets.loadImage("bogdanov", bogdanov_png);

    //
    Translate.init();
};

if (Config.IS_DEV)
    Engine.gotoStage(GameStage)
else
    Engine.gotoStage(TitleScreenStage)
    
Engine.init();
