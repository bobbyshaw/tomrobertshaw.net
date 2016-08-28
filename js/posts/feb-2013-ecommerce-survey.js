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
            text: 'Most Popular eCommerce Software (Top 1M Sites), Feb 2013'
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
                ['Magento', 9063],
                ['VirtueMart',  3324],
                ['PrestaShop',  2998],
                ['Zen Cart',  2515],
                ['osCommerce',  2461],
                ['OpenCart',  2425],
                ['Volusion', 1168],
                ['Interspire', 1106],
                ['Yahoo! Stores', 1014],
                ['Shopify',  826],
                ['Others',  7964]
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
            text: 'Most Popular eCommerce Software (Top 100K Sites), Feb 2013'
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
                ['Magento',   468],
                ['IBM WebSphere',  186],
                ['ATG',    161],
                ['Demandware',  81],
                ['VirtueMart', 72],
                ['osCommerce',   65],
                ['Hybris', 62],
                ['Open Cart', 52],
                ['Zen Cart',  50],
                ['Yahoo! Stores', 49],
                ['Others',    386]
            ]
        }]
    });
}, 500);
