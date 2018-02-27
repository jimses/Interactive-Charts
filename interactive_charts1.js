function getChartKind(k) {
    if (k == 'ColumnChart') {
        chartkind = "LineChart";
        $('#switch').val('View Column Chart')
    } else {
        chartkind = "ColumnChart";
        $('#switch').val('View Line Chart')
    }
    isFirstTime = true;
    whichquery(chartcontent)
}

function createCookie(name, value, days) {
  if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        var reg = ";reg=false"
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/" + reg;
};
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
        }
    return null;
};
function eraseCookie(name) {
    createCookie(name, "", -1);
};
function checkCookie() {
    var getcookie = readCookie("_irics");
    if (getcookie != null) {
      return getcookie;
    } else {
      createCookie("_irics", randomnumber, 365);
    }
}
function helpReg(regon) {
    var regin = regon;

    createCookie("_iricr", regin, 365);
}
function hideHelp() {
    createCookie("_iric", 1, 365);
}
function whichquery(o) {
    chartcontent = o;
    if (chartcontent == 1) {
        query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AtTcFrERjPhEdGNFVEh3c0RnVTZkbjFxTzd3RnJSdXc#&pub=1');
        $('#callback2').html('Number of selling communities at end of year')

    }
    //revenue data
    else if (chartcontent == 2) {
        query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AtTcFrERjPhEdGlfcUlJSnFoY2Rvbm1mbFlBNUw3VVE&pub=1');
        $('#callback2').html('Revenues')

    }
    //Assets and Liabilities
    else if (chartcontent == 3) {
        query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AtTcFrERjPhEdGxGY0Y0V295ODJJX285RkpWMzlJQkE&pub=1');
        $('#callback2').html('Cash')

    } else if (chartcontent == 4) {
        query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AtTcFrERjPhEdDVraDRMbU5pOEl5UUV5Wkxiek1OblE&pub=1');
        $('#callback2').html('Land (INVENTORY LAND COSTS)')

    }
    isFirstTime = true;
    $("#query-" + chartcontent).multiselect("uncheckAll");
    setQuery(multiarray, rangerestrictlow, rangerestricthigh)

}
report = fonction() {
    var randomnumber = Math.random()
    var str = "";
    var regon = 0;
    hideHelp()
    var navagent = navigator.userAgent;
    var isFirstTime = true;
    var options = {
        'showRowNumber': true
    };
    var data;
    var adata;
    var wrapper;
    var data1 = [];
    var data2 = [];
    var data3 = [];
    Y = 'Year';
    var built_select;
    var build_select;
    var chartcontent = 1;
    var chartkind = 'ColumnChart';
    var queryargument = "G";
    var rangerestrictlow = 1986;
    var rangerestricthigh = 2013;
    var minyear;
    var formatO
    var formatP
    var hAxisTitle = "Year";
    var multiarray = ["B"];
    var origarray = ["B"];
    var current = 0;
    var pos_before = 0;
    var pos_current = 1;
    var pos_after = 2;
    var posArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"];
    var yearArray = ["1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"];
    var constructArray = [
        ["1986"],
        ["1987"],
        ["1988"],
        ["1989"],
        ["1990"],
        ["1991"],
        ["1992"],
        ["1993"],
        ["1994"],
        ["1995"],
        ["1996"],
        ["1997"],
        ["1998"],
        ["1999"],
        ["2000"],
        ["2001"],
        ["2002"],
        ["2003"],
        ["2004"],
        ["2005"],
        ["2006"],
        ["2007"],
        ["2008"],
        ["2009"],
        ["2010"],
        ["2011"],
        ["2012"],
        ["2013"]
    ];
    var buildArray = [
        ["1986"],
        ["1987"],
        ["1988"],
        ["1989"],
        ["1990"],
        ["1991"],
        ["1992"],
        ["1993"],
        ["1994"],
        ["1995"],
        ["1996"],
        ["1997"],
        ["1998"],
        ["1999"],
        ["2000"],
        ["2001"],
        ["2002"],
        ["2003"],
        ["2004"],
        ["2005"],
        ["2006"],
        ["2007"],
        ["2008"],
        ["2009"],
        ["2010"],
        ["2011"],
        ["2012"],
        ["2013"]
    ];
    var vAxisTitle1 = "Number of selling communities at end of year";
    var vAxisTitle2 = "Total number of sales agreements signed";
    var pos1format;
    var pos2format;
    query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=0AtTcFrERjPhEdGNFVEh3c0RnVTZkbjFxTzd3RnJSdXc#&pub=1');
    function sendAndDraw() {
        query.send(handleQueryResponse);
    }
    function handleQueryResponse(response) {
        data = response.getDataTable();
        if (response.isError()) {
            return;
        };
        v2 = "cash";
        if (data.getNumberOfColumns() > 2) {
            var dataHold2 = [
                [Y, data.getColumnLabel(1), data.getColumnLabel(2)]
            ];
            v2 = data.getColumnLabel(2)
        }
        v1 = data.getColumnLabel(1)
        var dataHold1 = [
            [Y, data.getColumnLabel(1)]
        ];
        goon = false;
        returnlengthdiff = (constructArray.length - data.getNumberOfRows());
        if (rangerestricthigh != 2013) {
            highrange = findRangePos(rangerestricthigh, constructArray)

        }
        if (rangerestrictlow != 1986) {
            loopnumber = (constructArray.length - returnlengthdiff);
        } else {
            loopnumber = (constructArray.length);
        }
        data3.length = 0;
        if (data.getNumberOfColumns() > 2) {
            data3.push(dataHold2[0])
        } else {
            data3.push(dataHold1[0])
        };
        for (var k = 0; k < data.getNumberOfRows(); k++) {
            buildArray[k].length = 0;
            if (buildArray[k].length == 0) {
                for (var dd = 0; dd < data.getNumberOfColumns(); ++dd) {
                    var colv = data.getValue(k, dd);
                }
            }
            ++returnlengthdiff
        }
        returnlengthdiff2 = constructArray.length - data.getNumberOfRows();
        s = 0;
        for (var i = 0; i < loopnumber; ++i) {
            for (var jj = 1; jj < data.getNumberOfColumns(); ++jj) {

                var prec = data.getValue(i, jj);
                var restrictedyear = data.getValue(i, 0);
                var formattedyear = data.getFormattedValue(i, 0);
                if (buildArray[i].length == 0) {
                    buildArray[i].push({
                        v: restrictedyear,
                        f: 'formattedyear'
                    })
                }

                var num = data.getValue(s, jj);
                var form = data.getFormattedValue(s, jj);
                vAxisTitle1 = v1;
                vAxisTitle2 = v2;

                if (data.getNumberOfColumns() > 2) {
                    if (jj == 1) {
                        buildArray[s].push({
                            v: num,
                            f: form
                        });
                        if (vAxisTitle1.indexOf("Value") != -1 || vAxisTitle1.indexOf("price") != -1 || vAxisTitle1.indexOf("value") != -1 || vAxisTitle1.indexOf("Price") != -1 || vAxisTitle1.indexOf("Revenues") != -1 || vAxisTitle1.indexOf("$") != -1) {

                            pos1format = "dollars";

                        } else if (vAxisTitle1.indexOf("growth") != -1 || vAxisTitle1.indexOf("ratio") != -1 || vAxisTitle1.indexOf("Ratio") != -1 || vAxisTitle1.indexOf("%") != -1 || vAxisTitle1.indexOf("percentage") != -1 || vAxisTitle1.indexOf("margin") != -1 || vAxisTitle1.indexOf("Interest") != -1 || vAxisTitle1.indexOf("rate") != -1 || vAxisTitle1.indexOf("Tax Rate") != -1 || vAxisTitle1.indexOf("Return") != -1) {
                            pos1format = "percent";

                        } else {
                            pos1format = "numbers";

                        }
                    }
                    if (jj == 2) {
                        buildArray[s].push({
                            v: num,
                            f: form
                        })
                        if (vAxisTitle2.indexOf("Value") != -1 || vAxisTitle2.indexOf("price") != -1 || vAxisTitle2.indexOf("value") != -1 || vAxisTitle2.indexOf("Price") != -1 || vAxisTitle1.indexOf("Revenues") != -1 || vAxisTitle2.indexOf("$") != -1) {
                          pos2format = "dollars";
                        } else if (vAxisTitle2.indexOf("growth") != -1 || vAxisTitle2.indexOf("ratio") != -1 || vAxisTitle2.indexOf("Ratio") != -1 || vAxisTitle2.indexOf("%") != -1 || vAxisTitle2.indexOf("percentage") != -1 || vAxisTitle2.indexOf("margin") != -1 || vAxisTitle2.indexOf("Interest") != -1 || vAxisTitle2.indexOf("rate") != -1 || vAxisTitle2.indexOf("Rate") != -1 || vAxisTitle2.indexOf("Return") != -1) {
                            pos2format = "percent";
                          } else {
                            pos2format = "numbers";
                          }
                    }
                  } else {
                    if (i > 0) {
                        col1 = data.getValue(s - 1, jj);
                    }
                    buildArray[s].push({
                        v: num,
                        f: form
                    })
                    if (vAxisTitle1.indexOf("Value") != -1 || vAxisTitle1.indexOf("price") != -1 || vAxisTitle1.indexOf("value") != -1 || vAxisTitle1.indexOf("Price") != -1 || vAxisTitle1.indexOf("Revenues") != -1 || vAxisTitle1.indexOf("$") != -1) {
                        pos1format = "dollars";
                      } else if (vAxisTitle1.indexOf("growth") != -1 || vAxisTitle1.indexOf("ratio") != -1 || vAxisTitle1.indexOf("Ratio") != -1 || vAxisTitle1.indexOf("%") != -1 || vAxisTitle1.indexOf("percentage") != -1 || vAxisTitle1.indexOf("margin") != -1 || vAxisTitle1.indexOf("Interest") != -1 || vAxisTitle1.indexOf("rate") != -1 || vAxisTitle1.indexOf("Rate") != -1 || vAxisTitle1.indexOf("Return") != -1) {
                        pos1format = "percent";
                      } else {
                        pos1format = "numbers";
                      }
                  }
              }
            s++
            goon = true;
        }

        if (goon == true) {
            for (m = 0; m < data.getNumberOfRows(); m++) {
                data3.push(buildArray[m])

            }

            adata = google.visualization.arrayToDataTable(data3);

        }
        var numberformatter = new google.visualization.NumberFormat({
            pattern: '####'
        });
        numberformatter.format(adata, 0);
        adataloop = adata.getNumberOfRows();
        current = 0
        for (z = 0; z < adataloop; z++) {

            for (var t = 0; t < adata.getNumberOfColumns(); t++) {
                arrow = adata.getValue(z, t);
                dateformat = adata.getFormattedValue(z, t);

            }
            if (z > 0) {
                current++
            }
        }
        var formatter = new google.visualization.TableArrowFormat();
        formatter.format(data, 0);
        formatter.format(data, 1);
        if (data.getNumberOfColumns() > 2) {
            formatter.format(data, 2);
        }
        var table = new google.visualization.Table(document.getElementById('querytable'));
        table.draw(data, {
            allowHtml: true,
            'showRowNumber': false,
            'width': '900'
        });
        if (pos1format == "dollars") {
            formatter1 = new google.visualization.NumberFormat({
                pattern: '$#,###,###,###'
            });
            formatO = '$#,###,###,###';

        } else if (pos1format == "percent") {
            formatter1 = new google.visualization.NumberFormat({
                pattern: '##%'
            });
            formatO = "##%";
        } else {
            formatter1 = new google.visualization.NumberFormat({
                pattern: '#,###,###,###'
            });
            formatO = '####';

        }

        if (pos2format == "dollars") {
            formatter2 = new google.visualization.NumberFormat({
                pattern: '$#,###,###,###'
            });
            formatP = '$#,###,###,###';

        } else if (pos2format == "percent") {
            formatter2 = new google.visualization.NumberFormat({
                pattern: '##%'
            });
            formatP = "##%";
        } else {
            formatter2 = new google.visualization.NumberFormat({
                pattern: '####'
            });
            formatP = '####';

        }


        options = {
            focusTarget: 'category',
            pointSize: 2,
            fontSize: 9,
            tooltip: {
                isHtml: true
            },
            legendFontSize: 9,
            'colors': ['#008475', '#74C6B8'],
            'backgroundColor': "transparent",
            'width': 900,
            'height': 300,
            'legend': {
                position: 'top',
                alignment: 'start'
            },
            'visibleInLegend': true,
            /*'legend': 'none',*/

            'chartArea': {
                'backgroundColor': {
                    'fill': '#f8f8f8',
                    'opacity': 0,
                    'barWidth': 125,
                    'stroke': '#c8c8c8',
                    'stroke-width': '5'

                }

            },
            'animation': {
                'duration': 500,
                'easing': 'out'
            },
            'series': [{
                    targetAxisIndex: 0
                },
                {
                    targetAxisIndex: 1
                }
            ],
            'vAxes': [{
                format: formatO,
                minValue: 0,
                title: data.getColumnLabel(1),
                titleTextStyle: {
                    color: '#008475',
                    fontSize: 12
                }
            }, {
                format: formatP,
                title: v2,
                titleTextStyle: {
                    color: '#74C6B8',
                    fontSize: 12
                }
            }],
            'hAxis': {
                fontSize: 8,
                format: '####',
                count: '1',
                'slantedText': 'true',
                'showTextEvery': '1',
                'gridlines': {
                    count: -1
                }
            }
        }
        if (data.getNumberOfColumns() < 3) {
            isFirstTime = true;
        }
        if (isFirstTime) {
            if (chartkind == 'ColumnChart') {
                if (wrapper) {
                    wrapper.clearChart()

                }
                wrapper = new google.visualization.ColumnChart(document.getElementById('table1'));
              } else {
                  if (wrapper) {
                      wrapper.clearChart()

                  }
                  wrapper = new google.visualization.LineChart(document.getElementById('table1'));
              }

            }
          if (data.getNumberOfColumns() < 2 || data == null) {
              setQueryFirst("B")
          }
          if (wrapper != undefined) {
            google.visualization.events.addListener(wrapper, 'ready',
                function(event) {
                    $('#slider').slider('enable');
                    if (navagent.indexOf('MSIE') != -1 && navagent.indexOf('8') != -1) {
                        $('#helpshowhide').animate({
                            right: '50px'
                        }, 500);
                    }
                    formatYearToolTipYear()
                });
          }
        if (goon) {
            if (wrapper != undefined) {
                if (pos1format == "dollars") {
                    formatter1 = new google.visualization.NumberFormat({
                        pattern: '$#,###,###,###'
                    });
                } else if (pos1format == "percent") {
                    formatter1 = new google.visualization.NumberFormat({
                        pattern: '##%'
                    });
                } else {
                    formatter1 = new google.visualization.NumberFormat({
                        pattern: '#,###,###,###'
                    });
                }

                if (pos2format == "dollars") {
                    formatter2 = new google.visualization.NumberFormat({
                        pattern: '$#,###,###,###'
                    });
                } else if (pos2format == "percent") {
                    formatter2 = new google.visualization.NumberFormat({
                        pattern: '##%'
                    });
                } else {
                    formatter2 = new google.visualization.NumberFormat({
                        pattern: '####'
                    });
                }
                wrapper.draw(adata, options)
                goon = false;
                isFirstTime = false;
            }
          }
      }

    function addToArray(item, _array) {
        for (var i = 0; i < _array.length; i++) {
            if (_array[i] == item) {
                return;
            }
        }
        _array.push(item);
    }

    function removeFromArray(item, _array) {
        for (var i = 0; i < _array.length; i++) {
            if (_array[i] == item) {
                _array.splice(i, 1);
            }
        }
    }
    findPos = function(value, whicharray) {
        var pos;
        for (var i = 0; i < whicharray.length; i++) {

            if (whicharray[i] == value) {
                nextvaluename = posArray[i + 1];
                prevvaluename = posArray[i - 1];
                nextvaluepos = i + 1;
                prevvaluepos = i - 1;
                pos = i;
                pos_before = i;
                pos_after = i;

            } else {
                pos = -1;
            }

        }

    }
    findRangePos = function(value, whicharray) {
        var pos;
        for (var i = 0; i < whicharray.length; i++) {

            if (whicharray[i] == value) {
                nextvaluename = posArray[i + 1];
                prevvaluename = posArray[i - 1];
                nextvaluepos = i + 1;
                prevvaluepos = i - 1;
                pos = i;
                pos_before = i;
                pos_after = i;


            } else {
                pos = -1;
            }

        }

    }


    function setQueryFirst(queryString) {
        build_select = queryString;
        queryargument = queryString;
        setQuery(build_select, rangerestrictlow, rangerestricthigh);

    }

    function setQuery(queryString, rangestatelow, rangestatehigh) {
        queryargument = queryString;
        rangerestrictlow = rangestatelow;
        rangerestricthigh = rangestatehigh;
        if (rangestatelow == undefined) {
            rangerestrictlow = 1986;
        }
        if (rangestatehigh == undefined) {
            rangerestricthigh = 2013;
        }
        build_select = "select A, " + queryString + " where A >= " + rangerestrictlow + ".0 AND  A <= " + rangerestricthigh + ".0";
        query.setQuery(build_select);
        sendAndDraw();

    }

    function setQuery2(queryString) {
        var first_string = build_select;
        build_select = first_string + " where A " + queryString;
        query.setQuery(build_select);
        sendAndDraw();
    }

    // Not used presently.  Only necessary if used with the NumberRangeFiter, which currently is not being used becuase
    // we are not using the dashboard
    function formatYears() {

        $(".google-visualization-controls-rangefilter-thumblabel").each(function(i) {
            if (this.style.color !== "red") {
                this.style.color = "red";
            } else {
                this.style.color = "";
            }
            ranges = parseInt($(this).text())
            ranges_split = $(this).text().split(',')
            ranges_split0 = ranges_split[0]
            ranges_split1 = ranges_split[1]
            ranges_split1_split = ranges_split1.split('.')
            ranges_split1_use = ranges_split1_split[0]
            ranges_join = ranges_split0.concat(ranges_split1_use)
            $(this).replaceWith("<span>&nbsp;" + ranges_join + "&nbsp;</span>");
            ranges.toPrecision(4)
        });



    }

    function formatYearToolTipYear() {

        $(".li.google-visualization-tooltip-item").each(function(i) {
            if (this.style.color !== "red") {
                this.style.color = "red";
            } else {
                this.style.color = "";
            }
            ranges = parseInt($(this).text())
            ranges_split = $(this).text().split(',')
            ranges_split0 = ranges_split[0]
            ranges_split1 = ranges_split[1]
            ranges_split1_split = ranges_split1.split('.')
            ranges_split1_use = ranges_split1_split[0]
            ranges_join = ranges_split0.concat(ranges_split1_use)
            $(this).replaceWith("<span>&nbsp;" + ranges_join + "&nbsp;</span>");
            ranges.toPrecision(4)

        });



    }


    $(".li.google-visualization-tooltip-item").hover(function() {
        formatYearToolTipYear()
    })

    function setQueryFromUser() {
        setQuery(queryInput.value);

    }
    $(function() {
        $('#selectable').selectable({
            selected: function(event, ui) {
                var $variable = $(ui.selected).attr('id')
                var $variablename = $(ui.selected).attr('name')
                setQuery($(ui.selected).attr('id'))

            }
        });
    });


    $(function() {
        _callback = $("#callback");
        _callback2 = $("#callback2");
        _callback3 = $("#callback3");
        $("#query-1").multiselect({

            click: function(event, ui) {
                isFirstTime = false;
                queryargument = ui.value;
                findPos(queryargument, posArray)
                if (multiarray == undefined) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + ui.value + "]").text();

                }
                if (!multiarray || multiarray == undefined || multiarray.length == 0) {

                    var array_of_checked_values = $("#query-1").multiselect("getChecked").map(function() {
                        return this.value;

                    }).get();
                    multiarray = array_of_checked_values;

                }

                array_of_checked_values = $("#query-1").multiselect("getChecked").map(function() {
                    return this.value;

                }).get();
                if (array_of_checked_values.length < 2) {
                    multiarray = []
                    multiarray = array_of_checked_values;

                } else {
                    addToArray(ui.value, multiarray)

                }
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[2] + "]").text();
                    $('input:checkbox[value="' + multiarray[1] + '"]').attr('checked', false);
                    removeFromArray(multiarray[1], multiarray)

                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Click Selected : " + vAxisTitle2);
                _callback2.text("Click Selected : " + vAxisTitle1);

                setQuery(multiarray, rangerestrictlow, rangerestricthigh);


            },
            beforeopen: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[2] + "]").text();
                    $('input:checkbox[value="' + origarray[1] + '"]').attr('checked', false);
                    removeFromArray(origarray[1], origarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                current = 1 - current;

            },
            open: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                if (multiarray != undefined && multiarray.length > 0) {
                    origarray = multiarray;
                }
                for (i = 0; i < origarray.length; i++) {
                    $('input:checkbox[value="' + origarray[i] + '"]').attr('checked', true);
                    findPos(origarray[i], origarray)
                }

            },
            beforeclose: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            close: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("closed Selected : " + vAxisTitle1);

            },
            checkAll: function() {
                _callback.text("Check all clicked!");
            },
            uncheckAll: function() {
                _callback.text("Uncheck all clicked!");
            },
            optgrouptoggle: function(event, ui) {
                var values = $.map(ui.inputs, function(checkbox) {

                    return checkbox.value;
                }).join(", ");
                _callback.html("Checkboxes " + (ui.checked ? "checked" : "unchecked") + ": " + values);
            }

        });

        // query-2
        $("#query-2").multiselect({


            click: function(event, ui) {
                isFirstTime = false;
                queryargument = ui.value;
                findPos(queryargument, posArray)
                if (multiarray == undefined || multiarray.length == 0) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + ui.value + "]").text();

                }
                if (!multiarray || multiarray == undefined || multiarray.length == 0) {
                    var array_of_checked_values = $("#query-2").multiselect("getChecked").map(function() {


                        return this.value;

                    }).get();
                    multiarray = array_of_checked_values;
                }
                array_of_checked_values = $("#query-2").multiselect("getChecked").map(function() {
                    return this.value;

                }).get();
                if (array_of_checked_values.length < 2) {
                    multiarray = []
                    multiarray = array_of_checked_values;

                } else {
                    addToArray(ui.value, multiarray)
                }
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[2] + "]").text();
                    $('input:checkbox[value="' + multiarray[1] + '"]').attr('checked', false);
                    removeFromArray(multiarray[1], multiarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

                setQuery(multiarray, rangerestrictlow, rangerestricthigh);



            },
            beforeopen: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[2] + "]").text();
                    $('input:checkbox[value="' + origarray[1] + '"]').attr('checked', false);
                    removeFromArray(origarray[1], origarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                current = 1 - current;
            },
            open: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                if (multiarray != undefined && multiarray.length > 0) {
                    origarray = multiarray;
                }
                for (i = 0; i < origarray.length; i++) {
                    $('input:checkbox[value="' + origarray[i] + '"]').attr('checked', true);
                    findPos(origarray[i], origarray)
                }


            },
            beforeclose: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            close: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            checkAll: function() {
                _callback.text("Check all clicked!");
            },
            uncheckAll: function() {
                _callback.text("Uncheck all clicked!");
            },
            optgrouptoggle: function(event, ui) {
                var values = $.map(ui.inputs, function(checkbox) {

                    return checkbox.value;
                }).join(", ");
                _callback.html("Checkboxes " + (ui.checked ? "checked" : "unchecked") + ": " + values);
            }

        });

        // query-3

        $("#query-3").multiselect({


            click: function(event, ui) {
                isFirstTime = false;
                queryargument = ui.value;
                findPos(queryargument, posArray)
                if (multiarray == undefined || multiarray.length == 0) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + ui.value + "]").text();

                }
                if (!multiarray || multiarray == undefined || multiarray.length == 0) {
                    var array_of_checked_values = $("#query-3").multiselect("getChecked").map(function() {
                        return this.value;

                    }).get();
                    multiarray = array_of_checked_values;
                }
                var array_of_checked_values = $("#query-3").multiselect("getChecked").map(function() {
                    return this.value;

                }).get();
                if (array_of_checked_values.length < 2) {
                    multiarray = []
                    multiarray = array_of_checked_values;

                } else {
                    addToArray(ui.value, multiarray)
                }
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[2] + "]").text();
                    $('input:checkbox[value="' + multiarray[1] + '"]').attr('checked', false);
                    removeFromArray(multiarray[1], multiarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

                setQuery(multiarray, rangerestrictlow, rangerestricthigh);

            },
            beforeopen: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[2] + "]").text();
                    $('input:checkbox[value="' + origarray[1] + '"]').attr('checked', false);
                    removeFromArray(origarray[1], origarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("before open Selected : " + vAxisTitle2);
                _callback2.text("before open Selected : " + vAxisTitle1);
                current = 1 - current;
            },
            open: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                if (multiarray != undefined && multiarray.length > 0) {
                    origarray = multiarray;
                }
                for (i = 0; i < origarray.length; i++) {
                    $('input:checkbox[value="' + origarray[i] + '"]').attr('checked', true);
                    findPos(origarray[i], origarray)
                }

            },
            beforeclose: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            close: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            checkAll: function() {
                _callback.text("Check all clicked!");
            },
            uncheckAll: function() {
                _callback.text("Uncheck all clicked!");
            },
            optgrouptoggle: function(event, ui) {
                var values = $.map(ui.inputs, function(checkbox) {

                    return checkbox.value;
                }).join(", ");
                _callback.html("Checkboxes " + (ui.checked ? "checked" : "unchecked") + ": " + values);
            }

        });

        // query-4

        $("#query-4").multiselect({


            click: function(event, ui) {
                isFirstTime = false;
                queryargument = ui.value;
                findPos(queryargument, posArray)
                if (multiarray == undefined || multiarray.length == 0) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + ui.value + "]").text();

                }
                if (!multiarray || multiarray == undefined || multiarray.length == 0) {
                    var array_of_checked_values = $("#query-4").multiselect("getChecked").map(function() {
                        return this.value;

                    }).get();
                    multiarray = array_of_checked_values;
                }
                var array_of_checked_values = $("#query-4").multiselect("getChecked").map(function() {
                    return this.value;

                }).get();
                if (array_of_checked_values.length < 2) {
                    multiarray = []
                    multiarray = array_of_checked_values;

                } else {
                    addToArray(ui.value, multiarray)
                }
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[2] + "]").text();
                    $('input:checkbox[value="' + multiarray[1] + '"]').attr('checked', false);
                    removeFromArray(multiarray[1], multiarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + multiarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

                setQuery(multiarray, rangerestrictlow, rangerestricthigh);



            },
            beforeopen: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                if (multiarray.length > 2) {
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[2] + "]").text();
                    $('input:checkbox[value="' + origarray[1] + '"]').attr('checked', false);
                    removeFromArray(origarray[1], origarray)
                }
                if (multiarray.length == 2) {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = $("#" + this.name + " option[value=" + origarray[1] + "]").text();
                } else {
                    vAxisTitle1 = $("#" + this.name + " option[value=" + origarray[0] + "]").text();
                    vAxisTitle2 = "";
                }
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                current = 1 - current;
            },
            open: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);
                if (multiarray != undefined && multiarray.length > 0) {
                    origarray = multiarray;
                }
                for (i = 0; i < origarray.length; i++) {
                    $('input:checkbox[value="' + origarray[i] + '"]').attr('checked', true);
                    findPos(origarray[i], origarray)
                }

            },
            beforeclose: function() {
                _callback.html("is new chart wrapper : " + isFirstTime);
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            close: function() {
                _callback3.text("Selected : " + vAxisTitle2);
                _callback2.text("Selected : " + vAxisTitle1);

            },
            checkAll: function() {
                _callback.text("Check all clicked!");
            },
            uncheckAll: function() {
                _callback.text("Uncheck all clicked!");
            },
            optgrouptoggle: function(event, ui) {
                var values = $.map(ui.inputs, function(checkbox) {

                    return checkbox.value;
                }).join(", ");
                _callback.html("Checkboxes " + (ui.checked ? "checked" : "unchecked") + ": " + values);
            }

        });
    });


    $(function() {
        $("#slider").slider({
            values: [rangerestrictlow, rangerestricthigh],
            min: 1986,
            max: 2013,
            step: 1,
            slide: function(event, ui) {

                //lets not do anything on slide

            },

            stop: function(event, ui) {
                setQuery(multiarray, ui.values[0], ui.values[1])
                $("input.sliderValue").val(ui.values[0])
                $("input.sliderValue2").val(ui.values[1])
            },



            change: function(event, ui) {
                setQuery(multiarray, ui.values[0], ui.values[1])
                $("input.sliderValue").val(ui.values[0])
                $("input.sliderValue2").val(ui.values[1])

            }

        });
        $("input.sliderValue").change(function() {
            var $this = $(this);
            $("#slider").slider("value", 0);

        });

    });


    function convertPercent() {
        $('#table1 svg g:nth-of-type(13)').each(function() {
            gtext = $(this).text()
            gtext.css('color', 'red');
        })
    }
    $(document).ready(function() {
        if (document.documentMode) {
            //alert(" yo ")
            $('#helpshowhide').css('position:relative;left:-20px')
        }
        var knownuser = false;
        var fin = checkCookie();
        var iter = 0;
        var builditer = 0;
        if (fin != null) {
            knownuser = fin;
        } else {
            knownuser = false;
        }
        formatYearToolTipYear()
        //convertPercent()
        $('#callback3').html("Selected : " + vAxisTitle2)
        $('#callback2').html("Selected : " + vAxisTitle1)
        if (knownuser != undefined && knownuser != false) {
            $('#helpshowhide').html('Show Help Panel');
            $('.instructionsoverlay').hide();
            $('ul#descriptions').hide();
            $('ul.metro').hide();
            $('#helpshowhide').css('position:relative;left:-20px')
        }
        $('#table1c').hide();
        $('#switch').click(function() {
            getChartKind(chartkind);
        })
        $('#ashowhide').click(function() {

            if ($('#ashowhide').html() == 'Hide Tabular Data') {
                $('#ashowhide').html('Show Tabular Data');
                $('#querytable').hide();

            } else {
                $('#ashowhide').html('Hide Tabular Data');
                $('#querytable').show();

            }
        })

        $('#helpshowhide').click(function() {
            if ($('#helpshowhide').html() == 'Hide Help Panel') {
                $('#helpshowhide').html('Show Help Panel');
                $('.instructionsoverlay').hide();
                $('ul#descriptions').hide();
                $('ul.metro').hide();

            } else {
                $('#helpshowhide').html('Hide Help Panel');
                $('.instructionsoverlay').show();
                $('ul#descriptions').show();
                $('ul.metro').show();

            }
            $('#helpshowhide').css('position:relative;left:-20px')
        })
        getChartKind()
        $(function() {
            if (navagent.indexOf('MSIE') != -1 && navagent.indexOf('8') != -1) {
                $('#helpshowhide').animate({
                    right: '20px'
                }, 500);
                $('#switch').animate({
                    right: '20px'
                }, 500)

                $('ul#descriptions h2').click(function() {

                    jQuery('ul.menu li.' + $(this).attr('id')).toggleClass('active');

                })

                $('.marked1').click(function() {
                    markedval = $(this).attr('class')
                    jQuery('ul.metro li.' + markedval).toggleClass('active');

                })

            }
        });
        $(function() {
            $("#accordion").accordion({
                beforeActivate: function(event, ui) {
                    if (ui.newHeader) {
                        if ($(ui.newHeader).text() == 'Historical Statistics Summary') {
                            a = 1;
                        } else if ($(ui.newHeader).text() == 'Historical Data - Comparisons') {
                            a = 1;
                        } else if ($(ui.newHeader).text() == 'Historical Operations Data') {
                            //////////////////////////////////////////////////////console.log($(ui.newHeader).text())
                            a = 2;
                        } else if ($(ui.newHeader).text() == 'Historical Balance Sheet') {

                            a = 3;
                        }
                        $("#" + this.name + " option[value=" + multiarray[0] + "]").text();
                        whichquery(a)

                    }
                }


            });
        });


        $(function() {
            $("#toptabs").tabs({
                beforeActivate: function(event, ui) {
                    a = 1;
                    if ($(ui.newTab)) {
                        if ($(ui.newTab).text() == 'Historical Statistics Summary') {
                            a = 1;
                        } else if ($(ui.newTab).text() == 'Historical Data - Comparisons') {
                            a = 1;
                        } else if ($(ui.newTab).text() == 'Historical Operations Data') {
                            //////////////////////////////////////////////////////console.log($(ui.newHeader).text())
                            a = 2;
                        } else if ($(ui.newTab).text() == 'Historical Balance Sheet') {

                            a = 3;
                        }
                        $("#query-" + a).multiselect("uncheckAll");
                        whichquery(a)

                    }

                }


            });
        });

    });
}
