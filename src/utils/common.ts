
export const getQueryString = (Feild: String, Location: String) => {
  var reg = new RegExp('(^|&)' + Feild + '=([^&]*)(&|$)', 'i');
  var r = Location.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  }
  return null;
}
