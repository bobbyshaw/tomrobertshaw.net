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
            text: 'Most Popular eCommerce Software (Top 1M Sites), Oct 2012'
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
                ['Magento',   8087],
                ['Zen Cart',  4541],
                ['VirtueMart',    3657],
                ['osCommerce',     2881],
                ['PrestaShop',   2621],
                ['OpenCart',     1747],
                ['Volusion',   1080],
                ['Yahoo! Stores',  1068],
                ['Interspire',   987],
                ['Ubercart',   856],
                ['WP e-Commerce',  800],
                ['ECSHOP',  774],
                ['Others',   6125]
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
            text: 'Most Popular eCommerce Software (Top 100K Sites), Oct 2012'
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
                ['Magento',   403],
                ['IBM WebSphere',  181],
                ['ATG',    130],
                ['Zen Cart',  85],
                ['VirtueMart',     85],
                ['osCommerce',   83],
                ['Actinic',   81],
                ['Demandware',  72],
                ['Yahoo! Stores', 53],
                ['ECSHOP',    48],
                ['Ubercart', 43],
                ['Intershop',    43],
                ['Prestashop',    42],
                ['Open Cart', 40],
                ['GSI Commerce', 28],
                ['Others',    207]
            ]
        }]
    });
}, 500);
