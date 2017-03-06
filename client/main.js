sAlert.config({
  effect: 'bouncyflip',
  position: 'top-left',
  timeout: 5800,
  html: false,
  onRouteClose: false,
  stack: false,
  offset: 0
});

var _ = lodash;

function isFieldEmpty(field) {
  if(_.isEmpty(field) || _.isUndefined(field) || _.isNull(field)) {
    return true;
  }
  return false;
}
