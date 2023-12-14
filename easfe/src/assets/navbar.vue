<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed">
        <div class="container-fluid">
            <a href="/" class="navbar-brand"><strong>Compete</strong></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="offcanvas offcanvas-end flex-grow-0 " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hello, User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body w-auto ">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold">
                    <li class="nav-item mx-1 ">
                        
                        <a href="/" class="nav-link active " aria-current="page">Status</a>
                    </li>
                    <li class="nav-item mx-1 ">
                        <router-link :to="{name: 'login'}" class="btn btn-outline-success nav-link">login</router-link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

</script>