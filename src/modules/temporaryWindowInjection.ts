// TODO: Remove temporary code after all code in ../scripts has been ported.
// This is only here so that the code in ../scripts can use the new functionality

import SaveSelector from './SaveSelector';
import Profile from './profile/Profile';
import DataStore from './DataStore';
import * as GameConstants from './GameConstants';
import GameHelper from './GameHelper';
import LogEvent from './LogEvent';
// enums
import AuraType from './enums/AuraType';
import BadgeEnums from './enums/Badges';
import BerryColor from './enums/BerryColor';
import BerryType from './enums/BerryType';
import PokemonType from './enums/PokemonType';
import CaughtStatus from './enums/CaughtStatus';
import EvolutionType from './enums/EvolutionType';
import FarmNotificationType from './enums/FarmNotificationType';
import FlavorType from './enums/FlavorType';
import ItemType from './enums/ItemType';
import KeyItemType from './enums/KeyItemType';
import MulchType from './enums/MulchType';
import PlotStage from './enums/PlotStage';
import QuestLineState from './quests/QuestLineState';
// end enums
import BooleanSetting from './settings/BooleanSetting';
import RangeSetting from './settings/RangeSetting';
import Setting from './settings/Setting';
import SettingOption from './settings/SettingOption';
import BreedingFilters from './settings/BreedingFilters';
import WeatherType from './weather/WeatherType';
import Weather from './weather/Weather';
import SeededRand from './utilities/SeededRand';
import SeededDateRand from './utilities/SeededDateRand';
import Rand from './utilities/Rand';
import Settings from './settings/index';
import { SortOptionConfigs, SortOptions } from './settings/SortOptions';
import { AchievementSortOptionConfigs, AchievementSortOptions } from './achievements/AchievementSortOptions';
import AchievementCategory from './achievements/AchievementCategory';
import NotificationConstants from './notifications/NotificationConstants';
import Notifier from './notifications/Notifier';
import LogBook from './logbook/LogBook';
import { LogBookTypes } from './logbook/LogBookTypes';
import ChangelogItems from './changelog/ChangelogItems';
import RedeemableCode from './codes/RedeemableCode';
import RedeemableCodes from './codes/RedeemableCodes';
import RedeemableCodeController from './codes/RedeemableCodeController';
import EggType from './breeding/EggType';
import Multiplier from './multiplier/Multiplier';
import MultiplierType from './multiplier/MultiplierType';
import SpecialEvent from './specialEvents/SpecialEvent';
import Challenges from './challenges/Challenges';
import LevelType, { levelRequirements } from './party/LevelType';
import WalletClasses from './wallet/inject';
import GenericProxy from './utilities/GenericProxy';
import { SpriteCredits, CodeCredits } from './Credits';
import * as modalUtils from './utilities/Modal';
import PokemonCategories from './party/Category';
import Information from './utilities/Information';
import TypeHelper from './types/TypeHelper';
import Upgrade from './upgrades/Upgrade';
import ExpUpgrade from './upgrades/ExpUpgrade';
import OakItemType from './enums/OakItemType';
import OakItem from './oakItems/OakItem';
import OakItems from './oakItems/OakItems';
import BoughtOakItem from './oakItems/BoughtOakItem';
import OakItemController from './oakItems/OakItemController';
import OakItemLoadout from './oakItems/OakItemLoadout';
import OakItemLoadouts from './oakItems/OakItemLoadouts';
import SpecialRoutePokemon from './routes/SpecialRoutePokemon';
import RoutePokemon from './routes/RoutePokemon';
import RegionRoute from './routes/RegionRoute';
import Routes from './routes/Routes';
import SubRegion from './subRegion/SubRegion';
import SubRegions from './subRegion/SubRegions';
import Requirement from './requirements/Requirement';
import AchievementRequirement from './requirements/AchievementRequirement';
import NullRequirement from './requirements/NullRequirement';
import MultiRequirement from './requirements/MultiRequirement';
import OneFromManyRequirement from './requirements/OneFromManyRequirement';
import AttackRequirement from './requirements/AttackRequirement';
import BattleFrontierHighestStageRequirement from './requirements/BattleFrontierHighestStageRequirement';
import BattleFrontierTotalStageRequirement from './requirements/BattleFrontierTotalStageRequirement';
import BerriesUnlockedRequirement from './requirements/BerriesUnlockedRequirement';
import CapturedRequirement from './requirements/CapturedRequirement';
import CaughtPokemonRequirement from './requirements/CaughtPokemonRequirement';
import ClearDungeonRequirement from './requirements/ClearDungeonRequirement';
import ClearGymRequirement from './requirements/ClearGymRequirement';
import ClickRequirement from './requirements/ClickRequirement';
import DefeatedRequirement from './requirements/DefeatedRequirement';
import DevelopmentRequirement from './requirements/DevelopmentRequirement';
import DiamondRequirement from './requirements/DiamondRequirement';
import FarmHandRequirement from './requirements/FarmHandRequirement';
import FarmPlotsUnlockedRequirement from './requirements/FarmPlotsUnlockedRequirement';
import FarmPointsRequirement from './requirements/FarmPointsRequirement';
import GymBadgeRequirement from './requirements/GymBadgeRequirement';
import HatchRequirement from './requirements/HatchRequirement';
import HatcheryHelperRequirement from './requirements/HatcheryHelperRequirement';
import MoneyRequirement from './requirements/MoneyRequirement';
import MaxLevelOakItemRequirement from './requirements/MaxLevelOakItemRequirement';
import MaxRegionRequirement from './requirements/MaxRegionRequirement';
import ObtainedPokemonRequirement from './requirements/ObtainedPokemonRequirement';
import PokeballRequirement from './requirements/PokeballRequirement';
import PokerusStatusRequirement from './requirements/PokerusStatusRequirement';
import VitaminObtainRequirement from './requirements/VitaminObtainRequirement';
import QuestRequirement from './requirements/QuestRequirement';
import QuestLevelRequirement from './requirements/QuestLevelRequirement';
import RouteKillRequirement from './requirements/RouteKillRequirement';
import SeededDateRequirement from './requirements/SeededDateRequirement';
import SeviiCaughtRequirement from './requirements/SeviiCaughtRequirement';
import ShinyPokemonRequirement from './requirements/ShinyPokemonRequirement';
import SubregionRequirement from './requirements/SubregionRequirement';
import StarterRequirement from './requirements/StarterRequirement';
import TokenRequirement from './requirements/TokenRequirement';
import UndergroundItemsFoundRequirement from './requirements/UndergroundItemsFoundRequirement';
import UndergroundItemValueType from './enums/UndergroundItemValueType';
import UndergroundItem from './underground/UndergroundItem';
import UndergroundItems from './underground/UndergroundItems';
import UndergroundLayersMinedRequirement from './requirements/UndergroundLayersMinedRequirement';
import WeatherRequirement from './requirements/WeatherRequirement';
import MegaEvolveRequirement from './requirements/MegaEvolveRequirement';
import { SortModules, SortSaves } from './Sortable';
import KeyItemController from './keyItems/KeyItemController';
import KeyItem from './keyItems/KeyItem';
import KeyItems from './keyItems/KeyItems';
import Achievement from './achievements/Achievement';
import Gems from './gems/Gems';
import QuestLineCompletedRequirement from './requirements/QuestLineCompletedRequirement';
import QuestLineStepCompletedRequirement from './requirements/QuestLineStepCompletedRequirement';
import QuestLineStartedRequirement from './requirements/QuestLineStartedRequirement';
import TemporaryBattleRequirement from './requirements/TemporaryBattleRequirement';
import Translate from './translation/Translation';
import DayOfWeekRequirement from './requirements/DayOfWeekRequirement';
import SaveReminder from './saveReminder/SaveReminder';
import ClientRequirement from './requirements/ClientRequirement';
import lazyLoad from './utilities/LazyLoader';
import {
    beforeEvolve, EvoTrigger, LevelEvolution, StoneEvolution,
} from './pokemons/evolutions/Base';
import * as OtherEvos from './pokemons/evolutions/Methods';
import { pokemonBabyPrevolutionMap, pokemonList, pokemonMap } from './pokemons/PokemonList';
import TmpPokemonHelper from './pokemons/TmpPokemonHelper';
import PokedexFilters from './settings/PokedexFilters';
import { createLogContent } from './logbook/helpers';
import { ItemList } from './items/ItemList';
import Item from './items/Item';
import { MultiplierDecreaser } from './items/types';
import EnergyRestore from './items/EnergyRestore';
import EffectEngineRunner from './effectEngine/effectEngineRunner';
import ItemHandler from './items/ItemHandler';
import CaughtIndicatingItem from './items/CaughtIndicatingItem';
import EggItem from './items/EggItem';
import MegaStoneItem from './items/MegaStoneItem';
import PokeballItem from './items/PokeballItem';
import Vitamin from './items/Vitamin';
import VitaminController from './items/VitaminController';
import RoamingPokemonList from './pokemons/RoamingPokemonList';
import DataPokemon from './pokemons/DataPokemon';
import RoamingPokemon from './pokemons/RoamingPokemon';

Object.assign(<any>window, {
    SaveSelector,
    Profile,
    GameConstants,
    GameHelper,
    LogEvent,
    DataStore,
    BadgeCase: DataStore.badge,
    Statistics: DataStore.statistics,
    AuraType,
    BadgeEnums,
    BerryColor,
    BerryType,
    PokemonType,
    CaughtStatus,
    EvolutionType,
    FarmNotificationType,
    FlavorType,
    ItemType,
    KeyItemType,
    MulchType,
    PlotStage,
    QuestLineState,
    BooleanSetting,
    RangeSetting,
    Setting,
    SettingOption,
    WeatherType,
    Weather,
    SeededRand,
    SeededDateRand,
    Rand,
    Settings,
    NotificationConstants,
    Notifier,
    BreedingFilters,
    SortOptionConfigs,
    SortOptions,
    AchievementSortOptionConfigs,
    AchievementSortOptions,
    AchievementCategory,
    LogBook,
    LogBookTypes,
    createLogContent,
    ChangelogItems,
    RedeemableCode,
    RedeemableCodes,
    RedeemableCodeController,
    EggType,
    Multiplier,
    MultiplierType,
    SpecialEvent,
    Challenges,
    LevelType,
    levelRequirements,
    ...WalletClasses,
    GenericProxy,
    SpriteCredits,
    CodeCredits,
    modalUtils,
    PokemonCategories,
    Information,
    TypeHelper,
    Upgrade,
    ExpUpgrade,
    OakItemType,
    OakItem,
    OakItems,
    BoughtOakItem,
    OakItemController,
    OakItemLoadout,
    OakItemLoadouts,
    SpecialRoutePokemon,
    RoutePokemon,
    RegionRoute,
    Routes,
    SubRegion,
    SubRegions,
    Requirement,
    AchievementRequirement,
    NullRequirement,
    MultiRequirement,
    OneFromManyRequirement,
    AttackRequirement,
    BattleFrontierHighestStageRequirement,
    BattleFrontierTotalStageRequirement,
    BerriesUnlockedRequirement,
    CapturedRequirement,
    CaughtPokemonRequirement,
    ClearDungeonRequirement,
    ClearGymRequirement,
    ClickRequirement,
    DefeatedRequirement,
    DevelopmentRequirement,
    DiamondRequirement,
    FarmHandRequirement,
    FarmPlotsUnlockedRequirement,
    FarmPointsRequirement,
    GymBadgeRequirement,
    HatchRequirement,
    HatcheryHelperRequirement,
    MoneyRequirement,
    MaxLevelOakItemRequirement,
    MaxRegionRequirement,
    ObtainedPokemonRequirement,
    PokeballRequirement,
    PokerusStatusRequirement,
    VitaminObtainRequirement,
    QuestRequirement,
    QuestLevelRequirement,
    RouteKillRequirement,
    SeededDateRequirement,
    SeviiCaughtRequirement,
    ShinyPokemonRequirement,
    SubregionRequirement,
    StarterRequirement,
    TokenRequirement,
    UndergroundItemsFoundRequirement,
    UndergroundItemValueType,
    UndergroundItem,
    UndergroundItems,
    UndergroundLayersMinedRequirement,
    WeatherRequirement,
    MegaEvolveRequirement,
    SortModules,
    SortSaves,
    KeyItemController,
    KeyItem,
    KeyItems,
    Achievement,
    Gems,
    QuestLineCompletedRequirement,
    QuestLineStepCompletedRequirement,
    QuestLineStartedRequirement,
    TemporaryBattleRequirement,
    Translate,
    DayOfWeekRequirement,
    SaveReminder,
    ClientRequirement,
    lazyLoad,
    LevelEvolution,
    StoneEvolution,
    EvoTrigger,
    beforeEvolve,
    ...OtherEvos,
    pokemonList,
    pokemonMap,
    pokemonBabyPrevolutionMap,
    TmpPokemonHelper,
    PokedexFilters,
    ItemList,
    Item,
    MultiplierDecreaser,
    EnergyRestore,
    EffectEngineRunner,
    ItemHandler,
    CaughtIndicatingItem,
    EggItem,
    MegaStoneItem,
    PokeballItem,
    Vitamin,
    VitaminController,
    RoamingPokemonList,
    DataPokemon,
    RoamingPokemon,
});
