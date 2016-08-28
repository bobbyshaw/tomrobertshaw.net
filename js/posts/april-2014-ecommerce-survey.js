
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
            text: 'Most Popular eCommerce Software (Top 1M Sites), April 2014'
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
                ['Magento', 12252],
                ['WooCommerce', 4524],
                ['PrestaShop',  3836],
                ['OpenCart',  3736],
                ['VirtueMart', 2722],
                ['Shopify', 2115],
                ['osCommerce', 2009],
                ['ZenCart', 1590],
                ['BigCommerce', 1239],
                ['Others',  12836]
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
            text: 'Most Popular eCommerce Software (Top 100K Sites), April 2014'
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
                ['Magento',   704],
                ['IBM WebSphere',  228],
                ['WooCommerce',  186],
                ['ATG',  144],
                ['Demandware',  124],
                ['Hybris', 98],
                ['Open Cart', 83],
                ['Commerce Server', 69],
                ['VirtuMart', 64],
                ['Others', 673]
            ]
        }]
    });

}, 500);
