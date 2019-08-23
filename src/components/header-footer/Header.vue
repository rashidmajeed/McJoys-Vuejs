<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon">
            </div>
            <div class="nav">
                <img 
                :src="menuIcon"
                @click="showDrawerPanel = !showDrawerPanel"
                >
            </div>
            <md-drawer
                class="side-drawer" 
                :md-right="true"
                :md-active.sync="showDrawerPanel"
            />

        </div>
    </header>
</template>

<script>
import Logo from '../../assets/images/mainlogo.png'
import Menu from '../../assets/images/menu.png'

export default {
    data() {
        return {
            logoIcon: Logo,
            menuIcon: Menu,
            showDrawerPanel: false
        }
    }
}
</script>