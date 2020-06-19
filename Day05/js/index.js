var app = new Vue({
    el: '#app',
    data: {
        checkedAllFlag: false,
        checkedList: [],
        list: [
            {
                id: 1,
                name: 'iPhone SE',
                price: 3599,
                count: 1
            },
            {
                id: 2,
                name: 'iPhone XS',
                price: 4699,
                count: 1
            },
            {
                id: 3,
                name: 'iPhone X',
                price: 3999,
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i=0;i<this.list.length;i++){
                var item = this.list[i];
                if (this.checkedList.indexOf(item.id)>=0) {
                    total += item.price + item.count;
                }
            }
            return total;
        }
    },
    methods: {
        handleRemove: function (index) {
            app.list.splice(index,1);
        },
        handleSingleCheck: function (index,id) {
            if (this.checkedList.indexOf(id)>=0){
                this.checkedList.splice(this.checkedList.indexOf(id),1);
            }else{
                app.checkedList.push(id);
            }


        },
        handleAllChecked: function () {
            this.checkedAllFlag = !this.checkedAllFlag;
            if (this.checkedAllFlag){
                this.list.forEach(function (list) {
                    this.checkedList.push(list.id);
                },this)
            }else{
                this.checkedList=[];
            }
        }

    }
});
