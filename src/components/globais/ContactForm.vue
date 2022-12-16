<template>
  <form
    @submit.prevent="submitForm"
    class="relative"
  >
    <div :class="group">
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 "
        :class="{ error: v$.firstName.$errors.length }"
      >
        <input
          v-model="firstName"
          placeholder="Primeiro Nome"
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="first_name"
        />
        <div
          class="font-regular text-red-400 text-sm px-2 lowercase"
          v-for="error of v$.firstName.$errors"
          :key="error.$uid"
        >
          <div class="p-0">{{ error.$message }}</div>
        </div>
      </div>
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 "
      >
        <input
          v-model="lastName"
          placeholder="Sobrenome"
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="text"
          id="last_name"
        />
        <div
          class="font-regular text-red-400 text-sm px-2 lowercase"
          v-for="error of v$.lastName.$errors"
          :key="error.$uid"
        >
          <div class="p-0">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <div :class="group">
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 "
      >
        <input
          v-model="phone"
          type="tel"
          placeholder="Telefone"
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          id="phone"
        />
        <div
          class="font-regular text-red-400 text-sm px-2 lowercase"
          v-for="error of v$.phone.$errors"
          :key="error.$uid"
        >
          <div class="p-0">{{ error.$message }}</div>
        </div>
      </div>
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700 "
      >
        <input
          v-model="contact.email"
          placeholder="Email"
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
          type="email"
          id="mail"
        />
        <div
          class="font-regular text-red-400 text-sm px-2 lowercase"
          v-for="error of v$.contact.email.$errors"
          :key="error.$uid"
        >
          <div class="p-0">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <div :class="group">
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700  group relative z-50"
        @mouseenter="openSelectTech = true"
        @mouseleave="openSelectTech = false"
      >
        <input
          type="text"
          v-model="techFilter"
          :placeholder="
            tech.label === null ? 'Tecnologia de preferencia' : tech.label
          "
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
        />
        <ul
          v-if="openSelectTech"
          class="absolute top-12 bg-teal-100/[0.20] shadow-md rounded w-full"
          style="z-index: 99999"
        >
          <li
            v-for="item in getFilterTechs(techs)"
            :key="item.id"
            @click="
              () => {
                tech = item;
                techFilter = item.label;
                openSelectTech = !openSelectTech;
              }
            "
            class="bg-teal-50 w-11/12 my-1 mx-auto rounded p-2 cursor-pointer hover:bg-teal-100 transition-colors ease-linear"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      <div
        class="w-full md:w-2/4 flex flex-col font-medium text-teal-700  group relative z-50"
        @mouseenter="openSelectType = true"
        @mouseleave="openSelectType = false"
      >
        <input
          v-model="projectFilter"
          type="text"
          :placeholder="
            projectType.label === null ? 'Tipo de Projeto' : projectType.label
          "
          class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-12 px-2 focus:outline-none"
        />
        <ul
          v-if="openSelectType"
          class="absolute top-12 bg-teal-100/[0.20] shadow-md rounded w-full"
          style="z-index: 99999"
        >
          <li
            v-for="item in getFilterProjectType(projectsType)"
            :key="item.id"
            @click="
              () => {
                projectType = item;
                projectFilter = item.label;
                openSelectType = !openSelectType;
              }
            "
            class="bg-teal-50 w-11/12 my-1 mx-auto rounded p-2 cursor-pointer hover:bg-teal-100 transition-colors ease-linear"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <textarea
        v-model="message"
        placeholder="Digite sua mensagem"
        class="placeholder:text-teal-700 font-regular text-sm placeholder: bg-teal-50/[0.20] backdrop-blur-md rounded w-full h-24 resize-none px-2 focus:outline-none"
        name="message"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="flex items-center">
      <p class=" font-medium text-teal-500 pl-1">
        O projeto já possui o layout de design?
      </p>

      <p
        @click="layout = true"
        for="yes"
        class="text-teal-600 cursor-pointer flex gap-2 justify-center items-center mx-2"
      >
        <i class="far fa-square cursor" v-if="!layout || layout === null"></i>
        <i
          class="far fa-check-square cursor"
          v-if="layout && layout !== null"
        ></i>
        Sim
      </p>

      <p
        @click="layout = false"
        for="no"
        class="text-teal-600 cursor-pointer flex gap-2 justify-center items-center mx-2"
      >
        <i class="far fa-square cursor" v-if="layout || layout === null"></i>
        <i
          class="far fa-check-square cursor"
          v-if="!layout && layout !== null"
        ></i>
        Não
      </p>
    </div>
    <button
      type="submit"
      class="float-right bg-gradient-to-l drop-shadow-md hover:bg-gradient-to-r from-teal-600 to-teal-700 text-white btn rounded px-4 py-2"
    >
      Enviar
    </button>
  </form>
  <ToastComponent
    :type="alertType"
    :text="alertText"
    v-model:show="showAlert"
  />
  <ProgressBarForForm :show="loading" :percent="percentProgress" />
</template>

<script>
import { useEmail } from "@/store/email";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import ProgressBarForForm from "./ProgressBarForForm.vue";
import ToastComponent from "./ToastComponent.vue";

const phoneNumber = helpers.regex(/^^[(][1-9]{2}[)] [1-9]{5}[-][1-9]{4}$/);
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const store = useEmail();
    return {
      store,
      number: "",
      firstName: "",
      percentProgress: 0,
      message: "",
      loading: false,
      lastName: "",
      alertType: "success",
      alertText: "teste",
      showAlert: false,
      contact: {
        email: "",
      },
      techs: [
        { id: 1, label: "Vue" },
        { id: 2, label: "React" },
        { id: 3, label: "PHP" },
        { id: 4, label: "HTML/CSS/JS" },
        { id: 5, label: "Outra" },
      ],
      projectsType: [
        { id: 1, label: "E-Commerce" },
        { id: 2, label: "Institucional" },
        { id: 3, label: "Landing Page" },
        { id: 4, label: "Manuntenção de código" },
        { id: 5, label: "Outro" },
      ],
      tech: { id: 10, label: null },
      openSelectTech: false,
      projectType: { id: 10, label: null },
      openSelectType: false,
      layout: null,
      techFilter: "",
      projectFilter: "",
      group:
        "flex w-full justify-between items-center gap-2 py-2  flex-wrap md:flex-nowrap z-50 relative",
    };
  },
  computed: {
    phone: {
      get() {
        return this.number.replace(
          /([1-9]{2})([1-9]{5})([1-9]{4})/,
          "($1) $2-$3"
        );
      },
      set(value) {
        this.number = value.replace(
          /([1-9]{2})([1-9]{5})([1-9]{4})/,
          "($1) $2-$3"
        );
      },
    },
  },
  validations() {
    return {
      firstName: { required: helpers.withMessage("Digite seu nome", required) },
      lastName: {
        required: helpers.withMessage("Digite seu sobrenome", required),
      },
      phone: {
        required: helpers.withMessage("Digite seu telefone", required),
        phoneNumber: helpers.withMessage(
          "Digite um numero de telefone válido, não esqueça do DDD",
          phoneNumber
        ),
      },
      contact: {
        email: {
          required: helpers.withMessage("Digite seu email", required),
          email: helpers.withMessage("Digite um email válido", email),
        },
      },
    };
  },
  methods: {
    getFilterProjectType() {
      return this.projectsType.filter(
        (proj) =>
          proj.label.toLowerCase().indexOf(this.projectFilter.toLowerCase()) !==
          -1
      );
    },
    getFilterTechs(techs) {
      return techs.filter(
        (tech) =>
          tech.label.toLowerCase().indexOf(this.techFilter.toLowerCase()) !== -1
      );
    },
    emailTemplate() {
      return `
        <h1 style="text-transform:;color:#0e7490;text-align:center;padding:10px;border-bottom:1px solid #0e7490">Pedido de Proposta </h1>
        <div style="padding:5px;>
          <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Telefone: </span><span style="padding:0 5px;color:#424242">${
            this.firstName + " " + this.lastName
          } </span></p>        
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Telefone: </span><span style="padding:0 5px;color:#424242">${
          this.phone
        } </span></p>          
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Email: </span><span style="padding:0 5px;color:#424242">${
          this.contact.email
        } </span></p>          
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Tecnologia: </span><span style="padding:0 5px;color:#424242">${
          this.tech.label
        } </span></p>          
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Tipo de Projeto: </span><span style="padding:0 5px;color:#424242">${
          this.projectType.label
        } </span></p>          
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Possui Layout? : </span><span style="padding:0 5px;color:#424242">${
          this.layout ? "Sim" : "Não"
        } </span></p>          
        <p style="margin:5px 0;border:1px solid #0e7490;text-transform:;color:white;"><span style="padding:0 5px;background:#0e7490;display:inline-block;width:20%;height:100%">Mensagem : </span><span style="padding:0 5px;color:#424242">${
          this.message
        }</span></p>  
        </div>        
      `;
    },
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;
      const data = {
        sender: {
          name: this.firstName + " " + this.lastName,
          email: this.contact.email,
        },
        to: [
          {
            email: "crisrocha.dev@gmail.com",
            name: "Cristiane da Rocha",
          },
        ],
        subject: "Pedido de proposta SweetCode",
        htmlContent: this.emailTemplate(),
      };
      this.loading = true;
      let percentLoading = 0;
      const interval = setInterval(() => {
        percentLoading = percentLoading + 10;
        this.percentProgress = percentLoading;
        // console.log(percentLoading);
        if (percentLoading === 100) clearInterval(interval);
      }, 500);
      const result = await this.store.sendEmail(data);
      // console.log(data)
      if (result.messageId) {
        //exibir Aleta
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.email = "";
        this.tech = { id: 122, label: null };
        this.projectType = { id: 122, label: null };
        this.layout = null;

        this.alertText = "Email enviado com sucesso! ogo entro em contato!";
        this.alertType = "success";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          percentLoading = 1000;
          this.loading = false;
          clearInterval(interval);
        }, 5000);
      } else {
        this.alertText =
          "Não pudemos enviar seu formulário nesse momento, tente novamente mais tarde!";
        this.alertType = "error";
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          percentLoading = 1000;
          this.loading = false;
          clearInterval(interval);
        }, 5000);
      }
    },
  },
  components: { ToastComponent, ProgressBarForForm },
};
</script>
<style scoped>

</style>
