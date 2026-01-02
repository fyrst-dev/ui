
<template>
    <ShowcaseContainer>
        <FyrstCardRoot>
            <FyrstCardHeader
                title="Card Title"
                subtitle="Card Subtitle"
            />
            <FyrstCardBody>
                This is the body of the card. It contains the main content.
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
