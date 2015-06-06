MMU = {
  _inbios: 1,

  _bios: [],
  _rom: [],
  _wram: [],
  _eram: [],
  _zram: [],

  // Read a byte from memory.
  rb: function (addr) {
    switch (addr & 0xF000) {

    }
  }
};
