var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Marshall University Algebra-based Introductory Physics Formula Sheet for Common Final Exam",
  "body": " Marshall University Algebra-based Introductory Physics Formula Sheet for Common Final Exam   PHY 201                                 %    %                                                   Moments of Inertia                   Page 2                                  vacuum permeability                 Density of air at sea level at 15 C:     Earth's total magnetic field strength at Huntington, WV:     Vertical component of Earth's magnetic field strength at Huntington, WV:                   Page 3                                              Prefixes    giga [G]:  centi [c]:  nano [n]:    mega [M]:  milli [m]:  pico [p]:    kilo [k]:  micro [ ]:  femto [f]:       PHY 203                                                                                                                      Hydrogen Specturm Series       "
},
{
  "id": "subsec-Page-3-3",
  "level": "2",
  "url": "notes-week-01.html#subsec-Page-3-3",
  "type": "Table",
  "number": "1",
  "title": "Prefixes",
  "body": " Prefixes    giga [G]:  centi [c]:  nano [n]:    mega [M]:  milli [m]:  pico [p]:    kilo [k]:  micro [ ]:  femto [f]:    "
},
{
  "id": "subsec-PHY-203-2-106-1",
  "level": "2",
  "url": "notes-week-01.html#subsec-PHY-203-2-106-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hydrogen Specturm Series "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Marshall University Calculus-based Introductory Physics Formula Sheet for Common Final Exam",
  "body": " Marshall University Calculus-based Introductory Physics Formula Sheet for Common Final Exam   PHY 211                                                                                                        Page 2                                             Density of air at sea level at 15$^\\circ$ C: Earth's total magnetic field strength at Huntington, WV: Vertical component of Earth's magnetic field strength at Huntington, WV:                 Page 3                                               Prefixes               Moments of Inertia                 PHY 213                                                                                                                                                  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
