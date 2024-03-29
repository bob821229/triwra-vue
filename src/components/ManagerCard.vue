<template>

    <div class="content card_wrap">
        <div class="row">
            <div class="col-6 left_block">





                <h2>
                    <slot name="position">(放入職稱)</slot>
                    <slot name="name">(放入姓名)</slot>
                </h2>
                <h3>專業領域</h3>
                <p>
                    <slot name="professionalField">(放入專業領域)</slot>
                </p>
                <h3>學歷</h3>
                <ol>
                    <slot name="educationalQualifications">(放入學歷)</slot>

                </ol>
                <h3>經歷</h3>
                <ol>
                    <slot name="experience">(放入經歷)</slot>
                </ol>
            </div>
            <div class="col-6 right_block">
                <slot name="img">(放入照片)</slot>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card_wrap {
    max-width: 1100px;
    margin: 50px auto;
    padding: 20px;

    h2 {
        margin-bottom: 20px;
    }

    .left_block {
        display: flex;
        flex-direction: column;

        ol {
            list-style-type: decimal;

            li::marker {

                color: #54595f;
                font-size: 20px;
                font-weight: 500;
                font-family: Arial, sans-serif;
            }
        }
    }

    .right_block {
        padding: 50px;
        text-align: center;
    }
}


h2 {
    font-size: 28px;
    font-weight: 600;
    color: #54595f;
}

h3 {
    color: #54595f;
    font-size: 24px;
    font-weight: 600;

}

p {
    font-size: 20px;
    line-height: 41px;
    font-weight: 500;
    color: #54595f;
}
</style>