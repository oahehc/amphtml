import getDevice from '../is';

describe('getDevice', () => {
  it('should return "desktop" for MacOS Chrome', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3837.0 Safari/537.36';
    const platform = 'MacIntel';

    expect(getDevice({userAgent, platform})).to.equal('desktop');
  });

  it('should return "desktop" for MacOS Safari', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15';
    const platform = 'MacIntel';

    expect(getDevice({userAgent, platform})).to.equal('desktop');
  });

  it('should return "desktop" for MacOS Firefox', () => {
    const userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:66.0) Gecko/20100101 Firefox/66.0';
    const platform = 'MacIntel';

    expect(getDevice({userAgent, platform})).to.equal('desktop');
  });

  it('should return "tablet" for iPad', () => {
    const userAgent =
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';
    const platform = 'iPad';

    expect(getDevice({userAgent, platform})).to.equal('tablet');
  });

  it('should return "tablet" for Android tablet-Nexus 10', () => {
    const userAgent =
      'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3837.0 Safari/537.36';
    const platform = 'Android';

    expect(getDevice({userAgent, platform})).to.equal('tablet');
  });

  it('should return "tablet" for Windows tablet', () => {
    const userAgent =
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)';
    const platform = 'Windows';

    expect(getDevice({userAgent, platform})).to.equal('tablet');
  });

  it('should return "mobile" for iPhone', () => {
    const userAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"';
    const platform = 'iPhone';

    expect(getDevice({userAgent, platform})).to.equal('mobile');
  });

  it('should return "mobile" for Android phone-pixel2', () => {
    const userAgent =
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3837.0 Mobile Safari/537.36';
    const platform = 'Android';

    expect(getDevice({userAgent, platform})).to.equal('mobile');
  });

  it('should return "mobile" for Windows phone-Nokia Lumia 635', () => {
    const userAgent =
      'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537';
    const platform = 'Windows';

    expect(getDevice({userAgent, platform})).to.equal('mobile');
  });

  it('should return "mobile" for blackberry', () => {
    const userAgent =
      'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+';
    const platform = 'BlackBerry';

    expect(getDevice({userAgent, platform})).to.equal('mobile');
  });
});
