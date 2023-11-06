<script setup lang="ts">
import { mdiTranslate, mdiGithub, mdiLinkedin, mdiInstagram } from "@mdi/js";
import { h } from "vue";
import logo from "@/assets/images/logo.svg?raw";

// Components
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";

interface NavItem {
  id: string;
  label: string;
  active: boolean;
}

const sections: Array<NavItem> = [
  { id: "home", label: "Home", active: true },
  { id: "sobre", label: "Sobre", active: false },
  { id: "portfolio", label: "Portfolio", active: false },
  { id: "contato", label: "Contato", active: false },
];

const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<template>
  <div class="mx-auto">
    <header class="bg-white w-full fixed top-0">
      <nav class="nav border-b mx-6">
        <div class="flex h-16 items-center">
          <div class="nav-left flex-1">
            <a href="#" class="flex items-center gap-x-3">
              <VNodeRenderer
                :nodes="
                  h('div', {
                    innerHTML: logo,
                    style: 'line-height:0; color: rgb(59 130 246)',
                  })
                "
              />
              <h1 class="capitalize text-xl font-bold text-gray-500">WRnd</h1>
            </a>
          </div>
          <div class="nav-middle flex-1 h-full">
            <ul class="nav-menu justify-center">
              <li
                class="nav-item"
                :class="{ active: item.active }"
                :key="`nav-item-${item.id}`"
                v-for="item in sections"
              >
                <button @click="scrollToElement(item.id)" class="nav-link">
                  {{ item.label }}
                </button>
              </li>
            </ul>
          </div>
          <div class="nav-right flex-1 h-full">
            <ul class="nav-menu justify-end">
              <li class="nav-item">
                <button class="nav-link">Buscar</button>
              </li>
              <li class="nav-item">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <button class="nav-link" v-bind="props">
                      <v-icon :icon="mdiTranslate" />
                    </button>
                  </template>
                  <v-list>
                    <v-list-item>Português - Brasil</v-list-item>
                    <v-list-item>English</v-list-item>
                  </v-list>
                </v-menu>
              </li>
              <li class="nav-item">
                <ul class="social-icons">
                  <li class="social-item">
                    <a
                      class="social-link social-github"
                      href="https://github.com/weslanra"
                      target="_blank"
                    >
                      <v-icon :icon="mdiGithub" />
                    </a>
                  </li>
                  <li class="social-item">
                    <a
                      class="social-link social-linkedin"
                      href="https://www.linkedin.com/in/weslanra/"
                      target="_blank"
                    >
                      <v-icon :icon="mdiLinkedin" />
                    </a>
                  </li>
                  <li class="social-item">
                    <a
                      class="social-link social-instagram"
                      href="https://www.instagram.com/weslandev"
                      target="_blank"
                    >
                      <div class="social-bg">
                        <div class="social-inner">
                          <v-icon :icon="mdiInstagram" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div id="home" class="h-64 bg-red-300" style="margin-top: 65px"></div>
    <div id="sobre" class="h-64 bg-yellow-300"></div>
    <div id="portfolio" class="h-64 bg-blue-300"></div>
    <div id="contato" class="h-64 bg-green-300"></div>
  </div>
</template>
<style lang="scss">
$primary: #3b82f6;
$muted-hover: #111827;
$muted: #6b7280;
$color-github: #21262d;
$color-linkedin: #0077b5;
$bg-instagram: linear-gradient(
  45deg,
  #f09433 0%,
  #e6683c 25%,
  #dc2743 50%,
  #cc2366 75%,
  #bc1888 100%
);

.nav-menu {
  display: flex;
  height: 100%;
  align-items: center;

  .nav-item {
    height: 100%;
    text-transform: capitalize;

    &.active {
      border-bottom: 2px solid $primary;
      height: calc(100% + 1px);

      .nav-link {
        color: $primary;

        &:hover {
          color: $primary;
        }
      }
    }

    &:not(:first-child) {
      margin-left: 1.5rem;
    }

    .nav-link {
      color: $muted;
      height: 100%;
      font-size: 0.85rem;
      letter-spacing: 2px;
      font-weight: 500;
      transition: 0.3s ease-in-out;

      &:hover {
        color: $muted-hover;
      }
    }
  }
}

.social-icons {
  display: flex;
  height: 100%;

  .social-item {
    display: flex;
    align-items: center;

    .social-link {
      color: $muted;
      padding: 3px;
      position: relative;
      transition: 0.3s ease-in-out;

      &:hover {
        color: $muted-hover;
      }

      &.social-github:hover {
        color: $color-github;
      }

      &.social-linkedin:hover {
        color: $color-linkedin;
      }
    }

    .social-link.social-instagram {
      .social-inner {
        background: #fcfcfc;
        mix-blend-mode: screen;
        display: block;
      }

      .social-bg {
        background: #000;
        text-align: center;
        display: block;

        &::before {
          content: "";
          background: $bg-instagram;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: calc(100% - 7.5px);
          width: calc(100% - 6px);
          opacity: 0;
          transition: 0.3s ease-in-out;
        }
      }

      &:hover .social-bg::before {
        opacity: 1;
      }
    }
  }
}
</style>
