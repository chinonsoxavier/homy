<template>
    <div class="flex-1 text-darkText" >
        <div>
            <label>
                <slot />
            </label>
        </div>
        <select class="w-full mt-1 bg-transparent px-3 p-2 rounded-md border border-[#eaedf1]" id="">
            <option value="Apartment">Apartment</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Residences">Residences</option>
            <option value="Villas">Villas</option>
        </select>
    </div>
</template>