<template>
  <div>
    <TreeChart :json="treeData" />
  </div>
</template>

<script>
import { getUserInfo } from "../api/index";
import TreeChart from "vue-tree-chart";

export default {
  components: {
    TreeChart,
  },
  name: "haha",
  data() {
    return {
      code: "",
      treeData: {
        name: "root",
        image_url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
        class: ["rootNode"],
        children: [
          {
            name: "children1",
            image_url:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
          },
          {
            name: "children2",
            image_url:
              "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
            children: [
              {
                name: "grandchild",
                image_url:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
              },
              {
                name: "grandchild2",
                image_url:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
              },
              {
                name: "grandchild3",
                image_url:
                  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689173839,956040439&fm=26&gp=0.jpg",
              },
            ],
          },
        ],
      },
      contextstyle: {
        display: "none",
        right: "0px",
        top: "0px",
        left: "0px",
        bottom: "0px",
      },
    };
  },
  created() {
    getUserInfo(this.name).then((res) => {
      if (res.code == 200) {
        this.code = res.data.referrerCode;
      }
    });
  },
  computed: {},

  methods: {},
};
</script>
