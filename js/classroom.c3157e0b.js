(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["classroom"],
  {
    1636: function (t, n, e) {
      "use strict";
      e.r(n);
      e("7f7f");
      var s = function () {
          var t = this,
            n = t._self._c;
          return n(
            "div",
            [
              n("h2", { staticStyle: { "margin-bottom": "24px" } }, [
                t._v(
                  "\n    " +
                    t._s(t.$t("courseEntries")) +
                    " " +
                    t._s(t.$t("courseEntriesHint")) +
                    "\n  "
                ),
              ]),
              t._l(t.classrooms, function (e) {
                return n(
                  "Button",
                  {
                    key: e.id,
                    staticStyle: { "margin-right": "8px" },
                    attrs: { to: e.entry, target: "_blank" },
                  },
                  [
                    t._v(
                      t._s(
                        ("en" == t.$i18n.locale ? e.enName : e.name) || e.name
                      )
                    ),
                  ]
                );
              }),
            ],
            2
          );
        },
        o = [],
        r = e("2f62"),
        a = { computed: Object(r["b"])(["classrooms"]) },
        c = a,
        i = e("2877"),
        l = Object(i["a"])(c, s, o, !1, null, null, null);
      n["default"] = l.exports;
    },
  },
]);
//# sourceMappingURL=classroom.c3157e0b.js.map
