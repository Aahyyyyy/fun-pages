<template>
    <el-menu class="fun-menu" default-active="1">
        <el-menu-item index="1" @click="goTab(1)">
            <el-icon><Menu /></el-icon>
            <span>Tab1</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goTab(2)">
            <el-icon><Menu /></el-icon>
            <span>Tab2</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
    import './Side.scss'
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const goTab = (position: number) => {
        if (position == 1) {
            router.push({ path: "/" })
        } else {
            router.push({ path: "/me" })
        }
    }
</script>