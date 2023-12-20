app.component('order-form', {
    props: {
        cart: {
            type: Array,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        }
    },
    template: /*html*/
    `<div id="modal">
        <div class="backdrop" v-on:click="hideOrderForm"></div>
        <div class="modalBody">
        <div class="formContainer" id="orderForm">
            <h1>Complete the form below and hit submit</h1>
            <form class="orderForm" @submit.prevent="onSubmit">
            <ul>
                <li>
                <input
                    type="text"
                    class="fieldStyle fieldSplit alignLeft"
                    v-model="name"
                    placeholder="Name"
                />
                <input
                    type="text"
                    class="fieldStyle fieldSplit alignRight"
                    v-model="phone"
                    placeholder="Phone no."
                />
                </li>
                <input
                    type="hidden"
                    v-modal.number="total"
                    class="fieldStyle fieldSplit alignRight"
                />
                </li>
                <li>
                <textarea
                    class="fieldStyle"
                    v-model="address"
                    placeholder="Address"
                ></textarea>
                </li>
                <li>
                <input type="submit" value="Submit" />
                </li>
            </ul>
            </form>
        </div>
        </div>
    </div>`,
    data() {
        return {
            name: '',
            phone: '',
            address: ''
        }
    },
    methods: {
        hideOrderForm(){
            this.$emit('toggle-order-form');
        },
        onSubmit(){
            let orderDetails = {
                name: this.name,
                phone: this.phone,
                address: this.address,
                total: this.total
            }
            console.log(orderDetails);
            this.hideOrderForm();
            this.$emit('clear-cart');
        }
    }
});