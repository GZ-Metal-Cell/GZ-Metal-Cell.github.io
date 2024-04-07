function setupModel(data) {
    const model = data.scene.children[0];

    model.rotation.y = -45;

    return model;
}

export { setupModel };