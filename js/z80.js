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

  reset: function () {
    Z80._r.a = 0;
    Z80._r.b = 0;
    Z80._r.c = 0;
    Z80._r.d = 0;
    Z80._r.e = 0;
    Z80._r.h = 0;
    Z80._r.l = 0;
    Z80._r.f = 0;

    Z80._r.sp = 0;
    Z80._r.pc = 0;
    Z80._r.i = 0;
    Z80._r.r = 0;

    Z80._r.m = 0;
    Z80._r.t = 0;

    Z80._clock.m = 0;
    Z80._clock.t = 0;
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

    LDrHLm_b: function() {
      Z80._r.b=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_c: function() {
      Z80._r.c=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_d: function() {
      Z80._r.d=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_e: function() {
      Z80._r.e=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_h: function() {
      Z80._r.h=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_l: function() {
      Z80._r.l=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDrHLm_a: function() {
      Z80._r.a=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },

    LDHLmr_b: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.b);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_c: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.c);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_d: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.d);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_e: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.e);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_h: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.h);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_l: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.l);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDHLmr_a: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l,Z80._r.a);
      Z80._r.m=2;
      Z80._r.t=8;
    },

    LDrn_b: function() {
      Z80._r.b=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_c: function() {
      Z80._r.c=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_d: function() {
      Z80._r.d=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_e: function() {
      Z80._r.e=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_h: function() {
      Z80._r.h=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_l: function() {
      Z80._r.l=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },
    LDrn_a: function() {
      Z80._r.a=MMU.rb(Z80._r.pc);
      Z80._r.pc++;
      Z80._r.m=2;
      Z80._r.t=8; 
    },

    LDHLmn: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l, MMU.rb(Z80._r.pc));
      Z80._r.pc++;
      Z80._r.m=3;
      Z80._r.t=12; 
    },

    LDBCmA: function() {
      MMU.wb((Z80._r.b<<8)+Z80._r.c, Z80._r.a);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDDEmA: function() {
      MMU.wb((Z80._r.d<<8)+Z80._r.e, Z80._r.a);
      Z80._r.m=2;
      Z80._r.t=8;
    },

    LDmmA: function() {
      MMU.wb(MMU.rw(Z80._r.pc), Z80._r.a);
      Z80._r.pc+=2;
      Z80._r.m=4;
      Z80._r.t=16; 
    },

    LDABCm: function() {
      Z80._r.a=MMU.rb((Z80._r.b<<8)+Z80._r.c);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDADEm: function() {
      Z80._r.a=MMU.rb((Z80._r.d<<8)+Z80._r.e);
      Z80._r.m=2;
      Z80._r.t=8;
    },

    LDAmm: function() {
      Z80._r.a=MMU.rb(MMU.rw(Z80._r.pc));
      Z80._r.pc+=2;
      Z80._r.m=4;
      Z80._r.t=16; 
    },

    LDBCnn: function() {
      Z80._r.c=MMU.rb(Z80._r.pc);
      Z80._r.b=MMU.rb(Z80._r.pc+1);
      Z80._r.pc+=2;
      Z80._r.m=3; Z80._r.t=12; 
    },
    LDDEnn: function() {
      Z80._r.e=MMU.rb(Z80._r.pc);
      Z80._r.d=MMU.rb(Z80._r.pc+1);
      Z80._r.pc+=2;
      Z80._r.m=3; Z80._r.t=12; 
    },
    LDHLnn: function() {
      Z80._r.l=MMU.rb(Z80._r.pc);
      Z80._r.h=MMU.rb(Z80._r.pc+1);
      Z80._r.pc+=2;
      Z80._r.m=3; Z80._r.t=12; 
    },
    LDSPnn: function() {
      Z80._r.sp=MMU.rw(Z80._r.pc);
      Z80._r.pc+=2;
      Z80._r.m=3;
      Z80._r.t=12; 
    },

    LDHLmm: function() {
      var i=MMU.rw(Z80._r.pc);
      Z80._r.pc+=2;
      Z80._r.l=MMU.rb(i);
      Z80._r.h=MMU.rb(i+1); Z80._r.m=5; Z80._r.t=20; 
    },
    LDmmHL: function() {
      var i=MMU.rw(Z80._r.pc);
      Z80._r.pc+=2;
      MMU.ww(i,(Z80._r.h<<8)+Z80._r.l);
      Z80._r.m=5; Z80._r.t=20; 
    },

    LDHLIA: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l, Z80._r.a);
      Z80._r.l=(Z80._r.l+1)&255;
      if(!Z80._r.l) Z80._r.h=(Z80._r.h+1)&255;
      Z80._r.m=2; Z80._r.t=8; 
    },
    LDAHLI: function() {
      Z80._r.a=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.l=(Z80._r.l+1)&255;
      if(!Z80._r.l) Z80._r.h=(Z80._r.h+1)&255;
      Z80._r.m=2; Z80._r.t=8; 
    },

    LDHLDA: function() {
      MMU.wb((Z80._r.h<<8)+Z80._r.l, Z80._r.a);
      Z80._r.l=(Z80._r.l-1)&255;
      if(Z80._r.l==255) Z80._r.h=(Z80._r.h-1)&255;
      Z80._r.m=2; Z80._r.t=8; 
    },
    LDAHLD: function() {
      Z80._r.a=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      Z80._r.l=(Z80._r.l-1)&255;
      if(Z80._r.l==255) Z80._r.h=(Z80._r.h-1)&255;
      Z80._r.m=2; Z80._r.t=8; 
    },

    LDAIOn: function() {
      Z80._r.a=MMU.rb(0xFF00+MMU.rb(Z80._r.pc));
      Z80._r.pc++;
      Z80._r.m=3;
      Z80._r.t=12; 
    },
    LDIOnA: function() {
      MMU.wb(0xFF00+MMU.rb(Z80._r.pc),Z80._r.a);
      Z80._r.pc++;
      Z80._r.m=3;
      Z80._r.t=12; 
    },
    LDAIOC: function() {
      Z80._r.a=MMU.rb(0xFF00+Z80._r.c);
      Z80._r.m=2;
      Z80._r.t=8;
    },
    LDIOCA: function() {
      MMU.wb(0xFF00+Z80._r.c,Z80._r.a);
      Z80._r.m=2;
      Z80._r.t=8;
    },

    LDHLSPn: function() {
      var i=MMU.rb(Z80._r.pc);
      if(i>127) i=-((~i+1)&255);
      Z80._r.pc++;
      i+=Z80._r.sp; Z80._r.h=(i>>8)&255; Z80._r.l=i&255; Z80._r.m=3; Z80._r.t=12; 
    },

    SWAPr_b: function() {
      var tr=Z80._r.b;
      Z80._r.b=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_c: function() {
      var tr=Z80._r.c;
      Z80._r.c=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_d: function() {
      var tr=Z80._r.d;
      Z80._r.d=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_e: function() {
      var tr=Z80._r.e;
      Z80._r.e=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_h: function() {
      var tr=Z80._r.h;
      Z80._r.h=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_l: function() {
      var tr=Z80._r.l;
      Z80._r.l=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },
    SWAPr_a: function() {
      var tr=Z80._r.a;
      Z80._r.a=MMU.rb((Z80._r.h<<8)+Z80._r.l);
      MMU.wb((Z80._r.h<<8)+Z80._r.l,tr);
      Z80._r.m=4; Z80._r.t=16; 
    },

  }
}
