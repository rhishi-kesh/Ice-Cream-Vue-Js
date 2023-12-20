app.component('order-form', {
    props: {
        cart: {
            type: Array,
            required: true,
        }
    },
    template: /*html*/
    `<div id="modal">
        <div class="backdrop" v-on:click="hideOrderForm"></div>
        <div class="modalBody">
        <div class="formContainer" id="orderForm">
            <h1>Complete the form below and hit submit</h1>
            <form class="orderForm">
            <ul>
                <li>
                <input
                    type="text"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                />
                <input
                    type="text"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                />
                </li>
                <input
                    type="hidden"
                    class="fieldStyle fieldSplit alignRight"
                />
                </li>
                <li>
                <textarea
                    class="fieldStyle"
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
        }
    }
});