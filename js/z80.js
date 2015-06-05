Z80 = {
  _clock: { 
    m:0, 
    t:0 
  }

  _r: {
    a: 0, b: 0, c: 0, d: 0, e: 0, h: 0, l: 0, f: 0,
    pc: 0, sp: 0,
    m: 0, t: 0
  }

  _ops: {
    LDrr_bb: function() { 
      Z80._r.b = Z80._r.b; 
      Z80._r.m = 1; 
      Z80._r.t=4; 
    },
    LDrr_bc: function() {
      Z80._r.b=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_bd: function() {
      Z80._r.b=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_be: function() {
      Z80._r.b=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_bh: function() {
      Z80._r.b=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_bl: function() {
      Z80._r.b=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ba: function() {
      Z80._r.b=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_cb: function() {
      Z80._r.c=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_cc: function() {
      Z80._r.c=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_cd: function() {
      Z80._r.c=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ce: function() {
      Z80._r.c=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ch: function() {
      Z80._r.c=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_cl: function() {
      Z80._r.c=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ca: function() {
      Z80._r.c=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_db: function() {
      Z80._r.d=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_dc: function() {
      Z80._r.d=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_dd: function() {
      Z80._r.d=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_de: function() {
      Z80._r.d=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_dh: function() {
      Z80._r.d=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_dl: function() {
      Z80._r.d=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_da: function() {
      Z80._r.d=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_eb: function() {
      Z80._r.e=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ec: function() {
      Z80._r.e=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ed: function() {
      Z80._r.e=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ee: function() {
      Z80._r.e=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_eh: function() {
      Z80._r.e=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_el: function() {
      Z80._r.e=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ea: function() {
      Z80._r.e=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_hb: function() {
      Z80._r.h=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_hc: function() {
      Z80._r.h=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_hd: function() {
      Z80._r.h=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_he: function() {
      Z80._r.h=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_hh: function() {
      Z80._r.h=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_hl: function() {
      Z80._r.h=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ha: function() {
      Z80._r.h=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_lb: function() {
      Z80._r.l=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_lc: function() {
      Z80._r.l=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ld: function() {
      Z80._r.l=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_le: function() {
      Z80._r.l=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_lh: function() {
      Z80._r.l=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ll: function() {
      Z80._r.l=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_la: function() {
      Z80._r.l=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ab: function() {
      Z80._r.a=Z80._r.b;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ac: function() {
      Z80._r.a=Z80._r.c;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ad: function() {
      Z80._r.a=Z80._r.d;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ae: function() {
      Z80._r.a=Z80._r.e;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_ah: function() {
      Z80._r.a=Z80._r.h;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_al: function() {
      Z80._r.a=Z80._r.l;
      Z80._r.m=1;
      Z80._r.t=4;
    },
    LDrr_aa: function() {
      Z80._r.a=Z80._r.a;
      Z80._r.m=1;
      Z80._r.t=4;
    }
  }
}
