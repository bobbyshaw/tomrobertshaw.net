var chart = [];
setTimeout(function () {
    chart[0] = new Highcharts.Chart({
        chart: {
            backgroundColor: null,
            renderTo: 'mostPopularMillion',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: 'Most Popular eCommerce Software (Top 1M Sites), Feb 2012'
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(1) +' %';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'eCommerce Market Share',
            data: [
                ['Magento',   6795],
                ['Zen Cart',  4042],
                ['VirtueMart',    3914],
                ['osCommerce',     3199],
                ['PrestaShop',   2187],
                ['Volusion',   1266],
                ['Yahoo! Stores',  1217],
                ['OpenCart',     1129],
                ['Interspire',   983],
                ['Ubercart',   891],
                ['WP e-Commerce',  861],
                ['Actinic',  777],
                ['Others',   6371]
            ]
        }]
    });
    chart[1] = new Highcharts.Chart({
        chart: {
            backgroundColor: null,
            renderTo: 'mostPopularHundredThousand',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        title: {
            text: 'Most Popular eCommerce Software (Top 100K Sites), Feb 2012'
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(1) +' %';
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'eCommerce Market Share',
            data: [
                ['Magento',   345],
                ['IBM WebSphere',  185],
                ['ATG',    123],
                ['VirtueMart',     115],
                ['osCommerce',   101],
                ['Actinic',   91],
                ['Demandware',  64],
                ['Intershop',    62],
                ['Yahoo! Stores', 58],
                ['Zen Cart',  56],
                ['ECSHOP',    56],
                ['Ubercart', 41],
                ['GSI Commerce', 39],
                ['MivaMerchant',  38],
                ['Volusion', 34],
                ['Others',    247]
            ]
        }]
    });
}, 500);
