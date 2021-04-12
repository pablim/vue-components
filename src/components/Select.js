var selectElement = {
    data: function () {
        return {
            stylesheet: {
                tip: {
                    fontSize: "12px"
                }
            }
        }
    },
    props: [
        'id',
        'label',
        'tip',
        'name',
        'pos'
    ],
    computed: {
    },
    template: "\
        <div :class=\" \"\
                class=\"d-flex flex-column my-1 mx-1\" >\
            <label for=\"\">{{ label }}</label>\
            <select :id=\"id\" :name=\"name\">\
                <option>Teste</option>\
                <option>Teste 2</option>\
            </select>\
            <span :style=\"stylesheet.tip\">{{tip}}</span>\
        </div>\
    "
}