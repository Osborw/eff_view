import { FantasyStats } from './types'

//TODO: Self healing mapper
//1. Looking at all players weeks, are there any FantasyStats that are undefined for all?
//2. Are there any weeklystats that are not being represented here?

export const mapWeekDataToFantasyStats = (data: any) => {
  const fantasyStats: Partial<FantasyStats> = {
    rankStd: data.rank_std,
    rankPPR: data.rank_ppr,
    rankHalfPPR: data.rank_half_ppr,
    posRankStd: data.pos_rank_std,
    posRankPPR: data.pos_rank_ppr,
    posRankHalfPPR: data.pos_rank_half_ppr,

    ptsStd: data.pts_std,
    ptsPPR: data.pts_ppr,
    ptsHalfPPR: data.pts_half_ppr,
    ptsIdp: data.pts_idp,
    kickPts: data.kick_pts,

    gp: data.gp,
    gmsActive: data.gms_active,
    gs: data.gs,

    defSnp: data.def_snp,
    offSnp: data.off_snp,
    stSnp: data.st_snp,
    tmDefSnp: data.tm_def_snp,
    tmOffSnp: data.tm_off_snp,
    tmStSnp: data.tm_st_snp,

    fga: data.fga,
    fgblkd: data.fgblkd,
    fgm: data.fgm,
    fgm0_19: data.fgm_0_19,
    fgm20_29: data.fgm_20_29,
    fgm30_39: data.fgm_30_39,
    fgm40_49: data.fgm_40_49,
    fgm50p: data.fgm_50p,
    fgMiss: data.fgmiss,
    fgmiss20_29: data.fgmiss_20_29,
    fgmiss30_39: data.fgmiss_30_39,
    fgmiss40_49: data.fgmiss_40_49,
    fgMiss50p: data.fgmiss_50p,
    fgmLng: data.fgm_lng,
    fgmPct: data.fgm_pct,
    fgmYds: data.fgm_yds,
    fgmYdsOver30: data.fgm_yds_over_30,
    xpa: data.xpa,
    xpm: data.xpm,
    xpMiss: data.xpmiss,

    cmpPct: data.cmp_pct,
    pass2pt: data.pass_2pt,
    passAirYd: data.pass_air_yd,
    passAtt: data.pass_att,
    passCmp: data.pass_cmp,
    passCmp40p: data.pass_cmp_40p,
    passFd: data.pass_fd,
    passInc: data.pass_inc,
    passInt: data.pass_int,
    passIntTd: data.pass_int_td,
    passLng: data.pass_lng,
    passRtg: data.pass_rtg,
    passRushYd: data.pass_rush_yd,
    passRZAtt: data.pass_rz_att,
    passSack: data.pass_sack,
    passSackYds: data.pass_sack_yds,
    passTd: data.pass_td,
    passTd40p: data.pass_td_40p,
    passTd50p: data.pass_td_50p,
    passTdLng: data.pass_td_lng,
    passYd: data.pass_yd,
    passYpa: data.pass_ypa,
    passYpc: data.pass_ypc,

    rush2pt: data.rush_2pt,
    rush40p: data.rush_40p,
    rushAtt: data.rush_att,
    rushBtkl: data.rush_btkl,
    rushLng: data.rush_lng,
    rushRecYd: data.rush_rec_yd,
    rushRZAtt: data.rush_rz_att,
    rushTd: data.rush_td,
    rushFd: data.rush_fd,
    rushTd40p: data.rush_td_40p,
    rushTd50p: data.rush_td_50p,
    rushTdLng: data.rush_td_lng,
    rushTklLoss: data.rush_tkl_loss,
    rushTklLossYd: data.rush_tkl_loss_yd,
    rushYac: data.rush_yac,
    rushYd: data.rush_yd,
    rushYPA: data.rush_ypa,

    rec: data.rec,
    rec0_4: data.rec_0_4,
    rec10_19: data.rec_10_19,
    rec20_29: data.rec_20_29,
    rec2pt: data.rec_2pt,
    rec30_39: data.rec_30_39,
    rec40p: data.rec_40p,
    rec5_9: data.rec_5_9,
    recAirYd: data.rec_air_yd,
    recDrop: data.rec_drop,
    recFd: data.rec_fd,
    recLng: data.rec_lng,
    recRzTgt: data.rec_rz_tgt,
    recTd: data.rec_td,
    recTd40p: data.rec_td_40p,
    recTd50p: data.rec_td_50p,
    recTdLng: data.rec_td_lng,
    recTgt: data.rec_tgt,
    recYar: data.rec_yar,
    recYd: data.rec_yd,
    recYpr: data.rec_ypr,
    recYpt: data.rec_ypt,

    penalty: data.penalty,
    penaltyYd: data.penalty_yd,

    bonusDefFumTd50p: data.bonus_def_fum_td_50p,
    bonusDefIntTd50p: data.bonus_def_int_td_50p,
    bonusFdQB: data.bonus_fd_qb,
    bonusFdRB: data.bonus_fd_rb,
    bonusFdTE: data.bonus_fd_te,
    bonusFdWR: data.bonus_fd_wr,
    bonusPassCmp25: data.bonus_pass_cmp_25,
    bonusPassYd400: data.bonus_pass_yd_400,
    bonusRecRB: data.bonus_rec_rb,
    bonusRecTE: data.bonus_rec_te,
    bonusRecWR: data.bonus_rec_wr,
    bonusRecYd100: data.bonus_rec_yd_100,
    bonusRecYd200: data.bonus_rec_yd_200,
    bonusRushAtt20: data.bonus_rush_att_20,
    bonusRushRecYd100: data.bonus_rush_rec_yd_100,
    bonusRushRecYd200: data.bonus_rush_rec_yd_200,
    bonusRushYd100: data.bonus_rush_yd_100,
    bonusRushYd200: data.bonus_rush_yd_200,
    bonusSack2p: data.bonus_sack_2p,
    bonusTkl10p: data.bonus_tkl_10p,

    blkKick: data.blk_kick,
    blkKickRetYd: data.blk_kick_ret_yd,
    kr: data.kr,
    krLng: data.kr_lng,
    krYd: data.kr_yd,
    krTd: data.kr_td,
    miscRetYd: data.misc_ret_yd,
    pr: data.pr,
    prLng: data.pr_lng,
    prYd: data.pr_yd,
    prTd: data.pr_td,
    prYpa: data.pr_ypa,
    puntBlkd: data.punt_blkd,
    puntIn20: data.punt_in_20,
    puntNetYd: data.punt_net_yd,
    punts: data.punts,
    puntTb: data.punt_tb,
    puntYds: data.punt_yds,
    stFF: data.st_ff,
    stFumRec: data.st_fum_rec,
    stTd: data.st_td,
    stTklSolo: data.st_tkl_solo,
    xpBlkd: data.xp_blkd,

    anytimeTds: data.anytime_tds,
    ff: data.ff,
    ffMisc: data.ff_misc,
    fum: data.fum,
    fumLost: data.fum_lost,
    fumRec: data.fum_rec,
    fumRecEzTds: data.fum_rec_ez_tds,
    fumRecTd: data.fum_rec_td,
    fumRetYd: data.fum_ret_yd,
    spFumbleRecoveries: data.sp_fumble_recoveries,
    td: data.td,

    idpBlkKick: data.idp_blk_kick,
    idpDefTd: data.idp_def_td,
    idpFF: data.idp_ff,
    idpFumRec: data.idp_fum_rec,
    idpFumRetYd: data.idp_fum_ret_yd,
    idpInt: data.idp_int,
    idpIntRetYd: data.idp_int_ret_yd,
    idpPassDef: data.idp_pass_def,
    idpPassDef3p: data.idp_pass_def_3p,
    idpQBHit: data.idp_qb_hit,
    idpSack: data.idp_sack,
    idpSackYd: data.idp_sack_yd,
    idpSafe: data.idp_safe,
    idpTkl: data.idp_tkl,
    idpTklAst: data.idp_tkl_ast,
    idpTklLoss: data.idp_tkl_loss,
    idpTklSolo: data.idp_tkl_solo,
    tkl: data.tkl,
    tklAst: data.tkl_ast,
    tklAstMisc: data.tkl_ast_misc,
    tklLoss: data.tkl_loss,
    tklSolo: data.tkl_solo,
    tklSoloMisc: data.tkl_solo_misc,

    def3AndOut: data.def_3_and_out,
    def4AndStop: data.def_4_and_stop,
    defForcedPunts: data.def_forced_punts,
    defKr: data.def_kr,
    defKrLng: data.def_kr_lng,
    defKrYd: data.def_kr_yd,
    defKrTd: data.def_kr_td,
    defKrYpa: data.def_kr_ypa,
    defPassDef: data.def_pass_def,
    defPr: data.def_pr,
    defPrLng: data.def_pr_lng,
    defPrYd: data.def_pr_yd,
    defPrTd: data.def_pr_td,
    defPrYpa: data.def_pr_ypa,
    defStFF: data.def_st_ff,
    defStFumRec: data.def_st_fum_rec,
    defStTd: data.def_st_td,
    defStTklSolo: data.def_st_tkl_sol,
    defTd: data.def_td,
    def2Pt: data.def_2pt,
    int: data.int,
    intRetYd: data.int_ret_yd,
    ptsAllow: data.pts_allow,
    ptsAllow0: data.pts_allow_0,
    ptsAllow1_6: data.pts_allow_1_6,
    ptsAllow14_20: data.pts_allow_14_20,
    ptsAllow21_27: data.pts_allow_21_27,
    ptsAllow28_34: data.pts_allow_28_34,
    ptsAllow35p: data.pts_allow_35p,
    ptsAllow7_13: data.pts_allow_7_13,
    qbHit: data.qb_hit,
    sack: data.sack,
    sacks: data.sacks,
    sackYd: data.sack_yd,
    safe: data.safe,
    ydsAllow: data.yds_allow,
    ydsAllow0_100: data.yds_allow_0_100,
    ydsAllow100_199: data.yds_allow_100_199,
    ydsAllow200_299: data.yds_allow_200_299,
    ydsAllow300_349: data.yds_allow_300_350,
    ydsAllow350_399: data.yds_allow_350_399,
    ydsAllow400_449: data.yds_allow_400_449,
    ydsAllow450_499: data.yds_allow_450_499,
    ydsAllow500_549: data.yds_allow_500_549,
    ydsAllow550p: data.yds_allow_550p,

    fanPtsAllow: data.fan_pts_allow,
    fanPtsAllowK: data.fan_pts_allow_k,
    fanPtsAllowQB: data.fan_pts_allow_qb,
    fanPtsAllowRB: data.fan_pts_allow_rb,
    fanPtsAllowTE: data.fan_pts_allow_te,
    fanPtsAllowWR: data.fan_pts_allow_wr,
  }

  return fantasyStats
}

/**
 * Use this array to help check if there are any new keys provided by sleeper
 * that we do not account for.
 *
 * If there are missing keys, add them here and also to the mapper above.
 */
export const sleeperStatKeys = [
  'rank_std',
  'rank_ppr',
  'rank_half_ppr',
  'pos_rank_std',
  'pos_rank_ppr',
  'pos_rank_half_ppr',

  'pts_std',
  'pts_ppr',
  'pts_half_ppr',
  'pts_idp',
  'kick_pts',

  'gp',
  'gms_active',
  'gs',

  'def_snp',
  'off_snp',
  'st_snp',
  'tm_def_snp',
  'tm_off_snp',
  'tm_st_snp',

  'fg_ret_yd',
  'fga',
  'fgblkd',
  'fgm',
  'fgm_0_19',
  'fgm_20_29',
  'fgm_30_39',
  'fgm_40_49',
  'fgm_50p',
  'fgm_50_59',
  'fgm_60p',
  'fgmiss',
  'fgmiss_0_19',
  'fgmiss_20_29',
  'fgmiss_30_39',
  'fgmiss_40_49',
  'fgmiss_50_59',
  'fgmiss_50p',
  'fgmiss_60p',
  'fgm_lng',
  'fgm_pct',
  'fgm_yds',
  'fgm_yds_over_30',
  'xpa',
  'xpm',
  'xpmiss',

  'cmp_pct',
  'pass_2pt',
  'pass_air_yd',
  'pass_att',
  'pass_cmp',
  'pass_cmp_40p',
  'pass_fd',
  'pass_inc',
  'pass_int',
  'pass_int_td',
  'pass_lng',
  'pass_rtg',
  'pass_rush_yd',
  'pass_rz_att',
  'pass_sack',
  'pass_sack_yds',
  'pass_td',
  'pass_td_40p',
  'pass_td_50p',
  'pass_td_lng',
  'pass_yd',
  'pass_ypa',
  'pass_ypc',

  'rush_2pt',
  'rush_40p',
  'rush_att',
  'rush_btkl',
  'rush_lng',
  'rush_rec_yd',
  'rush_rz_att',
  'rush_td',
  'rush_fd',
  'rush_td_40p',
  'rush_td_50p',
  'rush_td_lng',
  'rush_tkl_loss',
  'rush_tkl_loss_yd',
  'rush_yac',
  'rush_yd',
  'rush_ypa',

  'rec',
  'rec_0_4',
  'rec_10_19',
  'rec_20_29',
  'rec_2pt',
  'rec_30_39',
  'rec_40p',
  'rec_5_9',
  'rec_air_yd',
  'rec_drop',
  'rec_fd',
  'rec_lng',
  'rec_rz_tgt',
  'rec_td',
  'rec_td_40p',
  'rec_td_50p',
  'rec_td_lng',
  'rec_tgt',
  'rec_yar',
  'rec_yd',
  'rec_ypr',
  'rec_ypt',

  'penalty',
  'penalty_yd',

  'bonus_def_fum_td_50p',
  'bonus_def_int_td_50p',
  'bonus_fd_qb',
  'bonus_fd_rb',
  'bonus_fd_te',
  'bonus_fd_wr',
  'bonus_pass_cmp_25',
  'bonus_pass_yd_300',
  'bonus_pass_yd_400',
  'bonus_rec_rb',
  'bonus_rec_te',
  'bonus_rec_wr',
  'bonus_rec_yd_100',
  'bonus_rec_yd_200',
  'bonus_rush_att_20',
  'bonus_rush_rec_yd_100',
  'bonus_rush_rec_yd_200',
  'bonus_rush_yd_100',
  'bonus_rush_yd_200',
  'bonus_sack_2p',
  'bonus_tkl_10p',

  'blk_kick',
  'blk_kick_ret_yd',
  'kr',
  'kr_lng',
  'kr_yd',
  'kr_td',
  'misc_ret_yd',
  'pr',
  'pr_lng',
  'pr_yd',
  'pr_td',
  'pr_ypa',
  'punt_blkd',
  'punt_in_20',
  'punt_net_yd',
  'punts',
  'punt_tb',
  'punt_yds',
  'st_ff',
  'st_fum_rec',
  'st_td',
  'st_tkl_solo',
  'xp_blkd',

  'anytime_tds',
  'ff',
  'ff_misc',
  'fum',
  'fum_lost',
  'fum_rec',
  'fum_rec_ez_tds',
  'fum_rec_td',
  'fum_ret_yd',
  'sp_fumble_recoveries',
  'td',

  'idp_blk_kick',
  'idp_def_td',
  'idp_ff',
  'idp_fum_rec',
  'idp_fum_ret_yd',
  'idp_int',
  'idp_int_ret_yd',
  'idp_pass_def',
  'idp_pass_def_3p',
  'idp_qb_hit',
  'idp_sack',
  'idp_sack_yd',
  'idp_safe',
  'idp_tkl',
  'idp_tkl_ast',
  'idp_tkl_loss',
  'idp_tkl_solo',
  'tkl',
  'tkl_ast',
  'tkl_ast_misc',
  'tkl_loss',
  'tkl_solo',
  'tkl_solo_misc',

  'def_3_and_out',
  'def_4_and_stop',
  'def_forced_punts',
  'def_kr',
  'def_kr_lng',
  'def_kr_yd',
  'def_kr_td',
  'def_kr_ypa',
  'def_pass_def',
  'def_pr',
  'def_pr_lng',
  'def_pr_yd',
  'def_pr_td',
  'def_pr_ypa',
  'def_st_ff',
  'def_st_fum_rec',
  'def_st_td',
  'def_st_tkl_solo',
  'def_td',
  'def_2pt',
  'int',
  'int_ret_yd',
  'pts_allow',
  'pts_allow_0',
  'pts_allow_1_6',
  'pts_allow_14_20',
  'pts_allow_21_27',
  'pts_allow_28_34',
  'pts_allow_35p',
  'pts_allow_7_13',
  'qb_hit',
  'sack',
  'sacks',
  'sack_yd',
  'safe',
  'yds_allow',
  'yds_allow_0_100',
  'yds_allow_100_199',
  'yds_allow_200_299',
  'yds_allow_300_349',
  'yds_allow_350_399',
  'yds_allow_400_449',
  'yds_allow_450_499',
  'yds_allow_500_549',
  'yds_allow_550p',

  'fan_pts_allow',
  'fan_pts_allow_k',
  'fan_pts_allow_qb',
  'fan_pts_allow_rb',
  'fan_pts_allow_te',
  'fan_pts_allow_wr',
]
