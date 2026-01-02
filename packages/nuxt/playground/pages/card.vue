
<template>
    <ShowcaseContainer>
        <FyrstCardRoot>
            <template #header>
                <FyrstCardHeader
                    title="Card Title"
                    subtitle="Card Subtitle"
                >
                <template #icon>
                    <span class="icon icon-info-bold" />
                </template>
                </FyrstCardHeader>
            </template>
            <FyrstCardBody>
                <p>This is the body of the card. It contains the main content.</p>
                <FyrstListRoot 
                    state="danger"
                    size="md"
                    :items="[
                        { content: 'First item' },
                        { content: 'Second item' },
                        { content: 'Third <b>bold</b> item' }
                    ]"/>
            </FyrstCardBody>
        </FyrstCardRoot>
    </ShowcaseContainer>
</template>

<script setup lang="ts">
</script>
