class Tokens {
  private accessKey = 'accessToken';
  private refreshKey = 'refreshToken';

  set(accessToken: string, refreshToken: string) {
    localStorage.setItem(this.accessKey, accessToken);
    localStorage.setItem(this.refreshKey, refreshToken);
  }

  get() {
    return {
      access: localStorage.getItem(this.accessKey),
      refresh: localStorage.getItem(this.refreshKey),
    };
  }

  remove() {
    localStorage.removeItem(this.accessKey);
    localStorage.removeItem(this.refreshKey);
  }
}

export const tokens = new Tokens();
