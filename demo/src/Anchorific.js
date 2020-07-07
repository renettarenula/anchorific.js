global.jQuery = require("jquery");
require("anchorific");

jQuery(function () {
  jQuery(".content").anchorific({ navElements: [".sidebar-anchorific"] });
});
