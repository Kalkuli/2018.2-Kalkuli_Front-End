export default new class {
  store = {};
  setItem = (key, val) => (this.store[key] = val);
  getItem = jest.fn(key => this.store[key]);
  removeItem = jest.fn(key => { delete this.store[key]; });
  clear = () => (this.store = {});
}();